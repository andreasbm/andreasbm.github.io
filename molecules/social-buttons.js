import {Buttons} from "../atoms/buttons.js";
import {githubIconTemplate, linkedInIconTemplate, spotifyIconTemplate, twitterIconTemplate} from "../icons.js";
import "./../atoms/button.js";
import "./../atoms/buttons.js";
import "./../atoms/icon.js";
import "./../atoms/text.js";
import {css, html} from "./../web_modules/lit-element.js";

class SocialButtons extends Buttons {
	static get styles () {
		return [
			super.styles,
			css`
				:host {
					width: 100%;
					display: flex;
					justify-content: center;
				}
			`
		];
	}

	render () {
		return html`
			<a href="https://github.com/andreasbm" target="_blank" rel="noopener">
				<an-button style="--background: #0D0E34; --foreground: var(--light);">
					<an-icon .template="${githubIconTemplate}"></an-icon>
					<span>Github</span>
				</an-button>
			</a>
			<a href="https://twitter.com/AndreasMehlsen" target="_blank" rel="noopener">
				<an-button style="--background: #03A9F4; --foreground: var(--light);">
					<an-icon .template="${twitterIconTemplate}"></an-icon>
					<span>Twitter</span>
				</an-button>
			</a>
			<a href="https://open.spotify.com/user/114799118" target="_blank" rel="noopener">
				<an-button style="--background: #1DB954; --foreground: var(--light);">
					<an-icon .template="${spotifyIconTemplate}"></an-icon>
					<span>Spotify</span>
				</an-button>
			</a>
			<a href="https://www.linkedin.com/in/andreasmehlsen" target="_blank" rel="noopener">
				<an-button style="--background: #0072B1; --foreground: var(--light);">
					<an-icon .template="${linkedInIconTemplate}"></an-icon>
					<span>LinkedIn</span>
				</an-button>
			</a>
		`;
	}
}

customElements.define("an-social-buttons", SocialButtons);