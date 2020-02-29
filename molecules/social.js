import {githubIconTemplate, linkedInIconTemplate, spotifyIconTemplate, twitterIconTemplate} from "../icons.js";
import "./../atoms/button.js";
import "./../atoms/buttons.js";
import "./../atoms/icon.js";
import "./../atoms/text.js";
import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";

class Social extends LitElement {
	static get properties () {
		return {
			headline: {
				type: String
			},
			text: {
				type: String
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: block;
					background: var(--shade-300);
					color: var(--shade-300-contrast);
					border-radius: var(--border-radius-m);
					padding: var(--spacing-xxxxl);
					box-shadow: var(--shadow);
				}
				
				#buttons {
					width: 100%;
					display: flex;
					justify-content: center;
				}
			`
		];
	}

	render () {
		return html`
			<div id="info">
				${this.headline != null ? html`<an-text id="headline" role="heading" aria-level="2" center margin="medium">${this.headline}</an-text>` : ""}
				${this.text != null ? html`<an-text id="text" center margin="xlarge">${this.text}</an-text>` : ""}
			</div>
			<an-buttons id="buttons">
				<a href="https://github.com/andreasbm" target="_blank">
					<an-button style="--background: #0D0E34; --foreground: var(--light);">
						<an-icon .template="${githubIconTemplate}"></an-icon>
						<span>Github</span>
					</an-button>
				</a>
				<a href="https://twitter.com/AndreasMehlsen" target="_blank">
					<an-button style="--background: #03A9F4; --foreground: var(--light);">
						<an-icon .template="${twitterIconTemplate}"></an-icon>
						<span>Twitter</span>
					</an-button>
				</a>
				<a href="https://open.spotify.com/user/114799118" target="_blank">
					<an-button style="--background: #1DB954; --foreground: var(--light);">
						<an-icon .template="${spotifyIconTemplate}"></an-icon>
						<span>Spotify</span>
					</an-button>
				</a>
				<a href="https://www.linkedin.com/in/andreasmehlsen" target="_blank">
					<an-button style="--background: #0072B1; --foreground: var(--light);">
						<an-icon .template="${linkedInIconTemplate}"></an-icon>
						<span>LinkedIn</span>
					</an-button>
				</a>
			</an-buttons>
		`;
	}
}

customElements.define("an-social", Social);