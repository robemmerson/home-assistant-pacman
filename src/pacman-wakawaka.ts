/**
 * Waka-Waka Easter Egg — global key sequence listener.
 *
 * Listens for "wakawaka" typed anywhere in Home Assistant.
 * To avoid interfering with HA shortcuts, tracking only begins
 * once "w" is pressed and expires after a short timeout.
 *
 * When triggered, opens a native HA dialog with Pac-Man via the
 * show-dialog event system.
 */

import type { PacmanWakawakaDialogParams } from "./pacman-wakawaka-dialog";

const CHEAT_CODE = "wakawaka";
const SEQUENCE_TIMEOUT_MS = 3000;

let buffer = "";
let timer: ReturnType<typeof setTimeout> | null = null;
let dialogOpen = false;

function reset(): void {
  buffer = "";
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

function findHaTarget(): Element | null {
  const ha = document.querySelector("home-assistant");
  if (!ha?.shadowRoot) return null;
  return ha.shadowRoot.querySelector("home-assistant-main") || ha;
}

function activate(): void {
  if (dialogOpen) return;
  dialogOpen = true;

  const target = findHaTarget();
  if (!target) return;

  const onClosed = (ev: Event) => {
    const detail = (ev as CustomEvent).detail;
    if (detail?.dialog === "pacman-wakawaka-dialog") {
      dialogOpen = false;
      target.removeEventListener("dialog-closed", onClosed);
    }
  };
  target.addEventListener("dialog-closed", onClosed);

  target.dispatchEvent(
    new CustomEvent("show-dialog", {
      bubbles: true,
      composed: true,
      detail: {
        dialogTag: "pacman-wakawaka-dialog",
        dialogImport: () => import("./pacman-wakawaka-dialog"),
        dialogParams: {} as PacmanWakawakaDialogParams,
      },
    })
  );
}

function handleKeyDown(ev: KeyboardEvent): void {
  if (dialogOpen) return;

  // Ignore key events when the user is typing in an input field.
  const path = ev.composedPath();
  for (const el of path) {
    if (!(el instanceof HTMLElement)) continue;
    const tag = el.tagName;
    if (
      tag === "INPUT" ||
      tag === "TEXTAREA" ||
      tag === "SELECT" ||
      el.isContentEditable
    ) {
      return;
    }
  }

  const key = ev.key.toLowerCase();

  // Only start tracking on "w"
  if (buffer === "" && key !== "w") return;

  buffer += key;

  if (timer) clearTimeout(timer);
  timer = setTimeout(reset, SEQUENCE_TIMEOUT_MS);

  if (!CHEAT_CODE.startsWith(buffer)) {
    reset();
    return;
  }

  // Swallow keys after first character so HA shortcuts don't fire
  if (buffer.length > 1) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  if (buffer === CHEAT_CODE) {
    reset();
    activate();
  }
}

document.addEventListener("keydown", handleKeyDown, true);
