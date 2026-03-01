import { css, html, LitElement, nothing, CSSResultGroup } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  HomeAssistant,
  LovelaceCard,
  LovelaceCardEditor,
} from "custom-card-helpers";
import { registerCustomCard } from "../utils/custom-cards";
import { CARD_NAME, CARD_EDITOR_NAME } from "../const";
import { PacmanCardConfig } from "./pacman-card-config";
import { PACMAN_STATIC_BASE } from "./const";

const ASSETS_PATH = `${PACMAN_STATIC_BASE}/assets`;
const PING_INTERVAL_MS = 2000;

declare global {
  interface Window {
    PacMan: (canvas: HTMLCanvasElement) => { stop: () => void };
  }
}

/** Load pacman-game.js into the global scope exactly once. */
let pacmanLoadPromise: Promise<void> | null = null;
function ensurePacManLoaded(): Promise<void> {
  if (pacmanLoadPromise) return pacmanLoadPromise;
  if ("PacMan" in window) {
    pacmanLoadPromise = Promise.resolve();
    return pacmanLoadPromise;
  }
  pacmanLoadPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${ASSETS_PATH}/pacman-game.js`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Pac-Man"));
    document.head.appendChild(script);
  });
  return pacmanLoadPromise;
}

registerCustomCard({
  type: CARD_NAME,
  name: "Pac-Man",
  description: "Play Pac-Man in your Home Assistant dashboard.",
});

@customElement(CARD_NAME)
export class PacmanCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ attribute: false }) public layout?: string;

  @state() private _config?: PacmanCardConfig;
  @state() private _gameStarted = false;
  @state() private _loading = false;

  private _gameRunning = false;
  private _entryId?: string;
  private _pingInterval?: ReturnType<typeof setInterval>;
  private _commandInterface?: { stop: () => void };
  private _boundBeforeUnload = this._stopPinging.bind(this);
  private _boundVisibilityChange = this._handleVisibilityChange.bind(this);

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import("./pacman-card-editor");
    return document.createElement(CARD_EDITOR_NAME) as LovelaceCardEditor;
  }

  public static getStubConfig(): Record<string, unknown> {
    return {
      auto_start: false,
    };
  }

  public setConfig(config: PacmanCardConfig): void {
    this._config = {
      ...config,
      type: `custom:${CARD_NAME}`,
    };
  }

  public getCardSize(): number {
    return 4;
  }

  public getGridOptions(options?: { columns?: number }) {
    // Pac-Man native ratio is 28:36 ≈ 3:4, but we adapt to HA grid.
    const columns = options?.columns ?? 12;
    const rows = Math.max(2, Math.round((columns * 5) / 12));
    return {
      columns: 12,
      rows,
      min_columns: 3,
      min_rows: 2,
    };
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("beforeunload", this._boundBeforeUnload);
    document.addEventListener("visibilitychange", this._boundVisibilityChange);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._destroyGame();
    window.removeEventListener("beforeunload", this._boundBeforeUnload);
    document.removeEventListener(
      "visibilitychange",
      this._boundVisibilityChange
    );
  }

  protected firstUpdated(): void {
    if (this._config?.auto_start) {
      this._startPacman();
    }
  }

  protected updated(changed: Map<string, unknown>): void {
    super.updated(changed);
    if (
      changed.has("_config") &&
      this._config?.auto_start &&
      !this._gameRunning &&
      !this._gameStarted
    ) {
      this._startPacman();
    }
  }

  protected render() {
    if (!this._config) {
      return nothing;
    }

    const useFixedRatio = this.layout !== "panel" && this.layout !== "grid";

    return html`
      <ha-card .header=${this._config.title || nothing}>
        <div
          id="root"
          style="${useFixedRatio ? "padding-top: 75%" : ""}"
          @keydown=${this._trapKey}
          @keyup=${this._trapKey}
          @keypress=${this._trapKey}
        >
          <div id="game"></div>
          ${!this._gameStarted
            ? html`
                <div id="overlay" @click=${this._startPacman}>
                  <div class="pac-logo">
                    <svg
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="48" fill="#ffff00" />
                      <polygon points="50,50 98,20 98,80" fill="#000" />
                    </svg>
                  </div>
                  <p>Click to play</p>
                </div>
              `
            : nothing}
          ${this._loading
            ? html`
                <div id="loading">
                  <div class="spinner"></div>
                  <p>Loading Pac-Man...</p>
                </div>
              `
            : nothing}
        </div>
      </ha-card>
    `;
  }

  private _trapKey(ev: Event): void {
    if (this._gameRunning) {
      ev.stopPropagation();
    }
  }

  private async _startPacman(): Promise<void> {
    if (this._gameRunning) return;
    this._gameRunning = true;
    this._gameStarted = true;
    this._loading = true;

    await this.updateComplete;
    await ensurePacManLoaded();

    const container = this.shadowRoot!.getElementById("game")!;
    const canvas = document.createElement("canvas");
    canvas.id = "pacman-canvas";
    // Fill the container
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    container.appendChild(canvas);

    // Set canvas pixel size to match display size
    const rect = container.getBoundingClientRect();
    canvas.width = Math.max(rect.width || 400, 200);
    canvas.height = Math.max(rect.height || 300, 150);

    this._loading = false;
    this._commandInterface = window.PacMan(canvas);
    canvas.focus();
    await this._resolveEntryId();
    this._startPinging();
  }

  private _destroyGame(): void {
    this._stopPinging();
    if (this._commandInterface) {
      try {
        this._commandInterface.stop();
      } catch {
        // Best effort
      }
      this._commandInterface = undefined;
    }
    const container = this.shadowRoot?.getElementById("game");
    if (container) {
      container.innerHTML = "";
    }
    this._gameRunning = false;
    this._gameStarted = false;
    this._loading = false;
  }

  // --- Binary sensor ping/stop ---

  private async _resolveEntryId(): Promise<void> {
    if (this._entryId || !this.hass) return;
    try {
      const result = await this.hass.callWS<
        { entry_id: string; domain: string }[]
      >({
        type: "config_entries/get",
      });
      const entry = result.find((e) => e.domain === "pacman");
      if (entry) {
        this._entryId = entry.entry_id;
      }
    } catch {
      // Pinging won't work, but the game still plays fine
    }
  }

  private _startPinging(): void {
    this._stopPinging();
    this._sendPing();
    this._pingInterval = setInterval(() => this._sendPing(), PING_INTERVAL_MS);
  }

  private _stopPinging(): void {
    if (this._pingInterval) {
      clearInterval(this._pingInterval);
      this._pingInterval = undefined;
    }
    this._sendStop();
  }

  private _sendPing(): void {
    if (!this.hass || !this._entryId) return;
    this.hass
      .callWS({ type: "pacman/ping", entry_id: this._entryId })
      .catch(() => {});
  }

  private _sendStop(): void {
    if (!this.hass || !this._entryId) return;
    this.hass
      .callWS({ type: "pacman/stop", entry_id: this._entryId })
      .catch(() => {});
  }

  private _handleVisibilityChange(): void {
    if (!this._gameRunning) return;
    if (document.hidden) {
      this._stopPinging();
    } else {
      this._startPinging();
    }
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
        height: 100%;
      }
      ha-card {
        overflow: hidden;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      #root {
        width: 100%;
        height: 100%;
        position: relative;
        background: #000;
      }
      #game {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      #game canvas {
        width: 100% !important;
        height: 100% !important;
        display: block;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #000;
        z-index: 100;
        cursor: pointer;
      }
      .pac-logo {
        width: 30%;
        max-width: 120px;
        min-width: 48px;
        margin-bottom: 1em;
        animation: chomp 0.4s ease-in-out infinite alternate;
      }
      .pac-logo svg {
        width: 100%;
        height: auto;
      }
      @keyframes chomp {
        from {
          clip-path: polygon(0 0, 100% 30%, 100% 70%, 0 100%);
        }
        to {
          clip-path: polygon(0 0, 100% 10%, 100% 90%, 0 100%);
        }
      }
      #overlay p {
        color: #ffff00;
        font-family: "Courier New", monospace;
        font-size: 1.05em;
        font-weight: bold;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        padding: 0.6em 1.6em;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 8px;
        animation: pulse-glow 2.5s ease-in-out infinite;
      }
      @keyframes pulse-glow {
        0%,
        100% {
          box-shadow: 0 0 8px rgba(255, 255, 0, 0.3);
        }
        50% {
          box-shadow:
            0 0 20px rgba(255, 255, 0, 0.7),
            0 0 40px rgba(255, 255, 0, 0.3);
        }
      }
      #loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 99;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "Courier New", monospace;
      }
      #loading p {
        color: #ffff00;
        font-size: 1.5em;
        margin-top: 1em;
      }
      .spinner {
        width: 50px;
        height: 50px;
        border: 4px solid #333;
        border-top: 4px solid #ffff00;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `;
  }
}
