# Home Assistant Custom Integration: Pac-Man

[![GitHub Release][releases-shield]][releases]
[![HACS][hacs-shield]][hacs]
[![Project Maintenance][maintenance-shield]][user_profile]
[![License][license-shield]](LICENSE.md)

[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]

Play the classic Pac-Man arcade game in your Home Assistant dashboard. 🎮

## About

WAKA WAKA WAKA! This custom integration adds a dashboard card that lets you
play Pac-Man directly inside your Home Assistant dashboard. No emulator, no
external dependencies — just a self-contained HTML5 Canvas game engine that
runs right in your browser.

Guide Pac-Man through the maze, eat all the dots, and avoid Blinky, Pinky,
Inky, and Clyde. Grab a power pellet to turn the tables and eat the ghosts
for bonus points. Classic arcade action, smart home style.

This is a fun effort, but it carries a vision: imagine a gaming dashboard in
Home Assistant with small games you can play, no matter where you are. Your
smart home, your rules, your entertainment.

## Credits

This project was entirely written by AI. Not just assisted, _entirely_ written.
The Python backend, the TypeScript frontend card, the Pac-Man game engine, the
build tooling, the translations, and even this README. All of it.

It was built using [Claude Code][claude-code], powered by the Claude Sonnet 4.6
model. The process started with a conversation describing what this project
should be, and from there, the AI handled every aspect of the implementation.

It is wild how capable AI has become. What would have taken days of work,
reading documentation, debugging edge cases, and wiring everything together,
was done in a single sitting with a conversation. We live in amazing times.

## Installation

### HACS (recommended)

1. Make sure [HACS](https://hacs.xyz/) is installed in your Home Assistant
   instance.
2. Add this repository as a custom repository in HACS:
   - Go to **HACS** > **Integrations** > **⋮** > **Custom repositories**
   - Add `https://github.com/robemmerson/home-assistant-pacman` with category
     **Integration**
3. Search for "Pac-Man" in HACS and install it.
4. Restart Home Assistant.
5. Go to **Settings** > **Devices & services** > **Add integration** and
   search for "Pac-Man".

### Manual installation

1. Download the latest release from the
   [releases page](https://github.com/robemmerson/home-assistant-pacman/releases).
2. Extract the `pacman.zip` file.
3. Copy the `custom_components/pacman` folder to your Home Assistant
   `config/custom_components/` directory.
4. Restart Home Assistant.
5. Go to **Settings** > **Devices & services** > **Add integration** and
   search for "Pac-Man".

## Usage

After installing and setting up the integration:

1. Edit any dashboard.
2. Click **Add card**.
3. Search for **Pac-Man**.
4. Add the card and resize it to your liking.
5. Click **"Click to play"** to start the game.

### Card options

The card editor provides the following configuration options:

- **Title**: Optional card header title. No title is shown by default.
- **Auto start**: Start the game immediately without clicking to play.
  Off by default.

### Controls

| Action     | Key / Input        |
| ---------- | ------------------ |
| Move up    | `↑` or `W`         |
| Move down  | `↓` or `S`         |
| Move left  | `←` or `A`         |
| Move right | `→` or `D`         |
| Touch      | Swipe in direction |

## Entities

The integration provides several entities, all grouped under a single
**Pac-Man** device.

### Pac-Man binary sensor

A binary sensor that tracks whether someone is actively playing Pac-Man on
your Home Assistant instance. It uses a heartbeat mechanism: the dashboard
card sends periodic pings while the game is running. If no ping is received
within 3 seconds (or the page is closed), the sensor turns off.

| State | Label           |
| ----- | --------------- |
| `on`  | Waka waka waka  |
| `off` | Waiting to play |

### Quote/Fact sensor

An enum sensor that displays a random Pac-Man fact. It updates once per day
and picks from a pool of facts covering the game's history, lore, and
development trivia.

### Current player sensor

Tracks which Home Assistant user is currently playing Pac-Man. When nobody is
playing, the state is "Nobody is playing".

### Session duration sensor

Shows the duration of the current (or last) Pac-Man session, displayed in
minutes. Updates in real time while the game is running.

### Total play time sensor

Tracks the cumulative time spent playing Pac-Man across all sessions, displayed
in hours. This value persists across restarts.

### Sessions played sensor

A counter that increments each time a new Pac-Man session is started. This
value persists across restarts.

### Last played sensor

A timestamp sensor that records when the last Pac-Man session ended.

## Easter egg 🥚

Type **`wakawaka`** anywhere in the Home Assistant interface and a Pac-Man
dialog will appear, letting you play the game immediately — no dashboard card
needed. WAKA WAKA WAKA!

## Example automations

### Pac-Man lighting mode

Set your office lights to arcade yellow while playing Pac-Man, and restore
them when you stop:

```yaml
automation:
  - alias: "Pac-Man lights on"
    description: "Set office lights to Pac-Man colors when playing"
    triggers:
      - trigger: state
        entity_id: binary_sensor.pac_man
        to: "on"
    actions:
      - action: scene.create
        data:
          scene_id: pacman_office_before
          snapshot_entities:
            - light.office
      - action: light.turn_on
        target:
          entity_id: light.office
        data:
          rgb_color: [255, 255, 0]
          brightness: 255

  - alias: "Pac-Man lights off"
    description: "Restore office lights when Pac-Man session ends"
    triggers:
      - trigger: state
        entity_id: binary_sensor.pac_man
        to: "off"
    actions:
      - action: scene.turn_on
        target:
          entity_id: scene.pacman_office_before
```

> **Tip:** Replace `light.office` with your own light entity IDs. You can add
> multiple lights to `snapshot_entities` and `target` to cover an entire room.

## Changelog & releases

This repository keeps a change log using [GitHub's releases][releases]
functionality. The format of the log is based on
[Keep a Changelog](http://keepachangelog.com/en/1.0.0/).

Releases are based on [Semantic Versioning](http://semver.org/spec/v2.0.0.html),
and use the format of `MAJOR.MINOR.PATCH`. In a nutshell, the version will be
incremented based on the following:

- `MAJOR`: Incompatible or major changes.
- `MINOR`: Backwards-compatible new features and enhancements.
- `PATCH`: Backwards-compatible bugfixes and package updates.

## Contributing

This is an active open-source project. We are always open to people who want to
use the code or contribute to it.

We've set up a separate document for our
[contribution guidelines](.github/CONTRIBUTING.md).

Thank you for being involved! 😍

## Authors & contributors

The original setup of this repository is by [robemmerson][user_profile].

For a full list of all authors and contributors, check
[the contributor's page][contributors].

## License

MIT License

Copyright (c) 2026 robemmerson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[claude-code]: https://claude.ai/claude-code
[commits-shield]: https://img.shields.io/github/commit-activity/y/robemmerson/home-assistant-pacman.svg
[commits]: https://github.com/robemmerson/home-assistant-pacman/commits/main
[contributors]: https://github.com/robemmerson/home-assistant-pacman/graphs/contributors
[hacs-shield]: https://img.shields.io/badge/HACS-Custom-41BDF5.svg
[hacs]: https://hacs.xyz/
[last-commit-shield]: https://img.shields.io/github/last-commit/robemmerson/home-assistant-pacman.svg
[license-shield]: https://img.shields.io/github/license/robemmerson/home-assistant-pacman.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[releases-shield]: https://img.shields.io/github/release/robemmerson/home-assistant-pacman.svg
[releases]: https://github.com/robemmerson/home-assistant-pacman/releases
[user_profile]: https://github.com/robemmerson
