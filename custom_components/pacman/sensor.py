"""Sensor platform for the Pac-Man integration."""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass
from datetime import datetime, timedelta
import random

from homeassistant.components.sensor import (
    RestoreSensor,
    SensorDeviceClass,
    SensorEntity,
    SensorEntityDescription,
    SensorStateClass,
)
from homeassistant.const import EntityCategory
from homeassistant.core import CALLBACK_TYPE, HomeAssistant, callback
from homeassistant.helpers.entity_platform import AddConfigEntryEntitiesCallback
from homeassistant.helpers.event import async_track_time_interval
from homeassistant.util import dt as dt_util

from .entity import PacmanEntity
from .manager import PacmanConfigEntry, PacmanPlayingManager

SCAN_INTERVAL = timedelta(days=1)

PACMAN_FACTS: list[str] = [
    "waka_waka",
    "original_1980",
    "namco_creation",
    "toru_iwatani",
    "pizza_inspiration",
    "four_ghosts",
    "blinky_shadow",
    "pinky_speedy",
    "inky_bashful",
    "clyde_pokey",
    "power_pellet",
    "fruit_bonus",
    "perfect_score",
    "kill_screen",
    "maze_patterns",
    "ghost_house",
    "tunnel_speed",
    "scatter_mode",
    "chase_mode",
    "frightened_mode",
    "elroy_mode",
    "ms_pacman",
    "highest_grossing",
    "cultural_icon",
    "pac_man_fever",
    "japan_1980",
    "us_1980",
    "ghost_names_japan",
    "255_levels",
    "first_mascot",
    "cabinet_design",
    "sound_effects",
    "intermissions",
    "no_end",
    "speed_increase",
    "pink_ghosts",
    "waka_sound",
    "game_over",
    "continues",
    "millennium_arcade",
    "smithsonian",
    "moma",
    "genome_project",
    "google_doodle",
    "guinness_records",
]


@dataclass(frozen=True, kw_only=True)
class PacmanSessionSensorEntityDescription(SensorEntityDescription):
    """Describes a Pac-Man session tracking sensor entity."""

    tracks_duration: bool = False
    on_start_fn: Callable[[int | float | None], int | float | None] | None = None
    on_stop_fn: (
        Callable[
            [int | float | datetime | None, float],
            int | float | datetime | None,
        ]
        | None
    ) = None
    on_tick_fn: Callable[[int | float | None, float], int | float | None] | None = None


PACMAN_CURRENT_PLAYER_DESCRIPTION = SensorEntityDescription(
    key="current_player",
    translation_key="current_player",
    device_class=SensorDeviceClass.ENUM,
    entity_category=EntityCategory.DIAGNOSTIC,
)

PACMAN_FACT_SENSOR_DESCRIPTION = SensorEntityDescription(
    key="fact",
    translation_key="fact",
    device_class=SensorDeviceClass.ENUM,
)

PACMAN_SESSION_SENSOR_DESCRIPTIONS: tuple[PacmanSessionSensorEntityDescription, ...] = (
    PacmanSessionSensorEntityDescription(
        key="last_played",
        translation_key="last_played",
        device_class=SensorDeviceClass.TIMESTAMP,
        entity_category=EntityCategory.DIAGNOSTIC,
        on_stop_fn=lambda _current, _duration: dt_util.utcnow(),
    ),
    PacmanSessionSensorEntityDescription(
        key="session_duration",
        translation_key="session_duration",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement="s",
        suggested_unit_of_measurement="min",
        entity_category=EntityCategory.DIAGNOSTIC,
        tracks_duration=True,
        on_start_fn=lambda _current: 0,
        on_stop_fn=lambda _current, duration: round(duration),
        on_tick_fn=lambda _base, elapsed: round(elapsed),
    ),
)

PACMAN_SESSION_RESTORE_SENSOR_DESCRIPTIONS: tuple[
    PacmanSessionSensorEntityDescription, ...
] = (
    PacmanSessionSensorEntityDescription(
        key="total_play_time",
        translation_key="total_play_time",
        device_class=SensorDeviceClass.DURATION,
        native_unit_of_measurement="s",
        suggested_unit_of_measurement="h",
        state_class=SensorStateClass.TOTAL_INCREASING,
        entity_category=EntityCategory.DIAGNOSTIC,
        tracks_duration=True,
        on_stop_fn=lambda current, duration: (current or 0) + round(duration),
        on_tick_fn=lambda base, elapsed: (base or 0) + round(elapsed),
    ),
    PacmanSessionSensorEntityDescription(
        key="sessions_played",
        translation_key="sessions_played",
        state_class=SensorStateClass.TOTAL_INCREASING,
        entity_category=EntityCategory.DIAGNOSTIC,
        on_start_fn=lambda current: (current or 0) + 1,
    ),
)


class _PacmanSessionTrackingMixin:
    """Mixin providing session tracking logic for Pac-Man sensors.

    Meant to be used alongside PacmanEntity and SensorEntity/RestoreSensor.
    """

    entity_description: PacmanSessionSensorEntityDescription
    _manager: PacmanPlayingManager
    _session_start: datetime | None
    _base_value: int | float | None
    _cancel_tick: CALLBACK_TYPE | None

    @callback
    def _async_on_update(self, is_playing: bool) -> None:
        """Handle playing state update."""
        description = self.entity_description
        if is_playing:
            if description.tracks_duration:
                self._session_start = self._manager.session_start
            self._base_value = self._attr_native_value
            if description.on_start_fn is not None:
                self._attr_native_value = description.on_start_fn(
                    self._attr_native_value
                )
                self.async_write_ha_state()
            if description.on_tick_fn is not None:
                self._cancel_tick = async_track_time_interval(
                    self.hass, self._async_tick, timedelta(seconds=1)
                )
        else:
            self._stop_tick()
            if description.on_stop_fn is not None:
                duration = 0.0
                if self._session_start is not None:
                    duration = (dt_util.utcnow() - self._session_start).total_seconds()
                    self._session_start = None
                self._attr_native_value = description.on_stop_fn(
                    self._base_value, duration
                )
                self.async_write_ha_state()

    @callback
    def _async_tick(self, _now: datetime) -> None:
        """Update sensor value every second during play."""
        if self._session_start is None:
            return
        elapsed = (dt_util.utcnow() - self._session_start).total_seconds()
        self._attr_native_value = self.entity_description.on_tick_fn(
            self._base_value, elapsed
        )
        self.async_write_ha_state()

    @callback
    def _stop_tick(self) -> None:
        """Cancel the periodic tick timer."""
        if self._cancel_tick is not None:
            self._cancel_tick()
            self._cancel_tick = None


async def async_setup_entry(
    hass: HomeAssistant,
    entry: PacmanConfigEntry,
    async_add_entities: AddConfigEntryEntitiesCallback,
) -> None:
    """Set up Pac-Man sensors from a config entry."""
    manager = entry.runtime_data
    entities: list[SensorEntity] = [
        PacmanFactSensor(entry),
        PacmanCurrentPlayerSensor(entry, manager),
    ]
    entities.extend(
        PacmanSessionSensor(entry, manager, description)
        for description in PACMAN_SESSION_SENSOR_DESCRIPTIONS
    )
    entities.extend(
        PacmanSessionRestoreSensor(entry, manager, description)
        for description in PACMAN_SESSION_RESTORE_SENSOR_DESCRIPTIONS
    )
    async_add_entities(entities)


class PacmanFactSensor(PacmanEntity, SensorEntity):
    """A sensor that displays random Pac-Man facts and quotes."""

    entity_description = PACMAN_FACT_SENSOR_DESCRIPTION
    _attr_options = PACMAN_FACTS
    _attr_should_poll = True

    def __init__(self, entry: PacmanConfigEntry) -> None:
        """Initialize the Pac-Man fact sensor."""
        super().__init__(entry)
        self._attr_unique_id = f"{entry.entry_id}_{self.entity_description.key}"
        self._attr_native_value = random.choice(PACMAN_FACTS)

    async def async_update(self) -> None:
        """Pick a new random Pac-Man fact or quote."""
        self._attr_native_value = random.choice(PACMAN_FACTS)


class PacmanCurrentPlayerSensor(PacmanEntity, SensorEntity):
    """Sensor showing which user is currently playing Pac-Man."""

    entity_description = PACMAN_CURRENT_PLAYER_DESCRIPTION
    _attr_should_poll = False

    def __init__(self, entry: PacmanConfigEntry, manager: PacmanPlayingManager) -> None:
        """Initialize the current player sensor."""
        super().__init__(entry)
        self._attr_unique_id = f"{entry.entry_id}_{self.entity_description.key}"
        self._manager = manager
        self._attr_options = ["nobody"]
        self._attr_native_value = "nobody"

    async def _async_build_options(self) -> list[str]:
        """Build the list of possible player options."""
        users = await self.hass.auth.async_get_users()
        names = sorted(
            {user.name for user in users if user.name and not user.system_generated}
        )
        return ["nobody", *names]

    @callback
    def _get_state(self) -> str:
        """Return the current state value."""
        player = self._manager.current_player
        return player if player and player in self._attr_options else "nobody"

    async def async_added_to_hass(self) -> None:
        """Register with the playing manager when added."""
        self._attr_options = await self._async_build_options()
        self._attr_native_value = self._get_state()
        self.async_on_remove(self._manager.async_add_listener(self._async_on_update))

    @callback
    def _async_on_update(self, is_playing: bool) -> None:
        """Handle playing state update."""
        self._attr_native_value = self._get_state()
        self.async_write_ha_state()


class PacmanSessionSensor(_PacmanSessionTrackingMixin, PacmanEntity, SensorEntity):
    """Sensor tracking Pac-Man session events."""

    entity_description: PacmanSessionSensorEntityDescription
    _attr_should_poll = False

    def __init__(
        self,
        entry: PacmanConfigEntry,
        manager: PacmanPlayingManager,
        description: PacmanSessionSensorEntityDescription,
    ) -> None:
        """Initialize the Pac-Man session sensor."""
        super().__init__(entry)
        self.entity_description = description
        self._attr_unique_id = f"{entry.entry_id}_{description.key}"
        self._manager = manager
        self._session_start: datetime | None = None
        self._base_value: int | float | None = None
        self._cancel_tick: CALLBACK_TYPE | None = None

    async def async_added_to_hass(self) -> None:
        """Register with the playing manager when added."""
        self.async_on_remove(self._manager.async_add_listener(self._async_on_update))


class PacmanSessionRestoreSensor(
    _PacmanSessionTrackingMixin, PacmanEntity, RestoreSensor
):
    """Sensor tracking Pac-Man session events with persistent state."""

    entity_description: PacmanSessionSensorEntityDescription
    _attr_should_poll = False
    _attr_native_value: int | float = 0

    def __init__(
        self,
        entry: PacmanConfigEntry,
        manager: PacmanPlayingManager,
        description: PacmanSessionSensorEntityDescription,
    ) -> None:
        """Initialize the Pac-Man session restore sensor."""
        super().__init__(entry)
        self.entity_description = description
        self._attr_unique_id = f"{entry.entry_id}_{description.key}"
        self._manager = manager
        self._session_start: datetime | None = None
        self._base_value: int | float = 0
        self._cancel_tick: CALLBACK_TYPE | None = None

    async def async_added_to_hass(self) -> None:
        """Restore previous state and register listener."""
        last_data = await self.async_get_last_sensor_data()
        if last_data and last_data.native_value is not None:
            self._attr_native_value = int(float(str(last_data.native_value)))
        self.async_on_remove(self._manager.async_add_listener(self._async_on_update))
