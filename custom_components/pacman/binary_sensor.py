"""Binary sensor platform for the Pac-Man integration."""

from __future__ import annotations

from homeassistant.components.binary_sensor import (
    BinarySensorEntity,
    BinarySensorEntityDescription,
)
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity_platform import AddConfigEntryEntitiesCallback

from .entity import PacmanEntity
from .manager import PacmanConfigEntry, PacmanPlayingManager

BINARY_SENSOR_DESCRIPTION = BinarySensorEntityDescription(
    key="playing",
    translation_key="playing",
)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: PacmanConfigEntry,
    async_add_entities: AddConfigEntryEntitiesCallback,
) -> None:
    """Set up Pac-Man binary sensor from a config entry."""
    async_add_entities([PacmanPlayingSensor(entry, entry.runtime_data)])


class PacmanPlayingSensor(PacmanEntity, BinarySensorEntity):
    """Binary sensor that indicates if Pac-Man is currently being played."""

    entity_description = BINARY_SENSOR_DESCRIPTION

    def __init__(self, entry: PacmanConfigEntry, manager: PacmanPlayingManager) -> None:
        """Initialize the Pac-Man playing sensor."""
        super().__init__(entry)
        self._attr_unique_id = f"{entry.entry_id}_{self.entity_description.key}"
        self._manager = manager

    async def async_added_to_hass(self) -> None:
        """Register with the playing manager when added."""
        self.async_on_remove(self._manager.async_add_listener(self._async_on_update))
        self._attr_is_on = self._manager.is_playing

    @callback
    def _async_on_update(self, is_playing: bool) -> None:
        """Handle playing state update."""
        self._attr_is_on = is_playing
        self.async_write_ha_state()
