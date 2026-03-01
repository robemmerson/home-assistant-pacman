"""Pac-Man integration for Home Assistant."""

from __future__ import annotations

from pathlib import Path

from homeassistant.components.frontend import add_extra_js_url, remove_extra_js_url
from homeassistant.components.http import StaticPathConfig
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant

from .const import URL_BASE
from .manager import PacmanConfigEntry, PacmanPlayingManager
from .websocket_api import async_register_websocket_commands

FRONTEND_PATH = Path(__file__).parent / "frontend"

PLATFORMS = [Platform.BINARY_SENSOR, Platform.SENSOR]


async def async_setup_entry(hass: HomeAssistant, entry: PacmanConfigEntry) -> bool:
    """Set up Pac-Man from a config entry."""
    entry.runtime_data = PacmanPlayingManager(hass)

    await hass.http.async_register_static_paths(
        [StaticPathConfig(URL_BASE, str(FRONTEND_PATH), cache_headers=True)]
    )
    add_extra_js_url(hass, f"{URL_BASE}/pacman-card.js")
    add_extra_js_url(hass, f"{URL_BASE}/pacman-wakawaka.js")

    async_register_websocket_commands(hass)

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)

    return True


async def async_unload_entry(hass: HomeAssistant, entry: PacmanConfigEntry) -> bool:
    """Unload a Pac-Man config entry."""
    remove_extra_js_url(hass, f"{URL_BASE}/pacman-card.js")
    remove_extra_js_url(hass, f"{URL_BASE}/pacman-wakawaka.js")
    return await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
