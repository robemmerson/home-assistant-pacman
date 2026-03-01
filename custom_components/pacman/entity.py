"""Base entity for the Pac-Man integration."""

from __future__ import annotations

from homeassistant.helpers.device_registry import DeviceInfo
from homeassistant.helpers.entity import Entity

from .const import DOMAIN
from .manager import PacmanConfigEntry


class PacmanEntity(Entity):
    """Define a base Pac-Man entity."""

    _attr_has_entity_name = True

    def __init__(self, entry: PacmanConfigEntry) -> None:
        """Initialize the Pac-Man entity."""
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, entry.entry_id)},
            name="Pac-Man",
            manufacturer="Namco",
            model="Pac-Man (1980)",
        )
