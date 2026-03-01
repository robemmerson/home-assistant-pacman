/**
 * Pac-Man Waka-Waka Dialog — native ha-dialog wrapping a pacman-card.
 *
 * Opened via HA's show-dialog event system so it feels like a
 * first-class Home Assistant dialog. Reuses the pacman-card element
 * so all sensor pings, session tracking, etc. work automatically.
 */

import { css, html, LitElement, nothing, CSSResultGroup } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCard } from "custom-card-helpers";
import setupCustomLocalize from "./localize";

type PacmanCardElement = LovelaceCard & {
  hass?: HomeAssistant;
  layout?: string;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PacmanWakawakaDialogParams {}

@customElement("pacman-wakawaka-dialog")
export class PacmanWakawakaDialog extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @query("pacman-card") private _card?: PacmanCardElement;
  @state() private _open = false;
  @state() private _title = "WAKA WAKA WAKA!";

  public showDialog(_params: PacmanWakawakaDialogParams): void {
    const localize = setupCustomLocalize(this.hass);
    this._title = localize("dialog.wakawaka.title");
    this._open = true;
    this.updateComplete.then(() => {
      this._setupCard();
    });
  }

  public closeDialog(): boolean {
    this._open = false;
    this._fireDialogClosed();
    return true;
  }

  private _setupCard(): void {
    if (this._card) {
      this._card.layout = "panel";
      this._card.setConfig({ type: "custom:pacman-card", auto_start: true });
      this._card.hass = this.hass;
    }
  }

  private _fireDialogClosed(): void {
    this.dispatchEvent(
      new CustomEvent("dialog-closed", {
        bubbles: true,
        composed: true,
        detail: { dialog: this.localName },
      })
    );
  }

  private _handleDialogClosed(): void {
    this._open = false;
    this._fireDialogClosed();
  }

  protected updated(changed: Map<string, unknown>): void {
    super.updated(changed);
    if (changed.has("hass") && this.hass && this._card) {
      this._card.hass = this.hass;
    }
  }

  protected render() {
    if (!this._open) return nothing;

    return html`
      <ha-dialog
        .open=${this._open}
        @closed=${this._handleDialogClosed}
        flexcontent
      >
        <ha-dialog-header slot="header">
          <ha-icon-button slot="navigationIcon" @click=${this.closeDialog}>
            <ha-icon icon="mdi:close"></ha-icon>
          </ha-icon-button>
          <span slot="title">${this._title}</span>
        </ha-dialog-header>
        <pacman-card></pacman-card>
      </ha-dialog>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-dialog {
        --dialog-content-padding: 0;
        --mdc-dialog-max-width: min(90vw, calc(75vh * 8 / 5));
        --mdc-dialog-min-width: 0;
      }

      pacman-card {
        display: block;
        width: 100%;
        aspect-ratio: 8 / 5;
      }

      /* Hide the ha-card chrome inside pacman-card — the dialog
         already provides the header / frame. */
      pacman-card::part(card) {
        border: none;
        box-shadow: none;
      }
    `;
  }
}
