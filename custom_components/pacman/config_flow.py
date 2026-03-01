"""Config flow for the Pac-Man integration."""

from __future__ import annotations

from homeassistant.config_entries import ConfigFlow, ConfigFlowResult

from .const import DOMAIN


class PacmanConfigFlow(ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Pac-Man."""

    VERSION = 1

    async def async_step_user(self, user_input: dict | None = None) -> ConfigFlowResult:
        """Handle the initial step."""
        self._async_abort_entries_match({})

        if user_input is not None:
            return self.async_create_entry(title="Pac-Man", data={})

        return self.async_show_form(step_id="user")
