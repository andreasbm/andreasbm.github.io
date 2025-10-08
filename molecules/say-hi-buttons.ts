import {Buttons} from "../atoms/buttons";
import {
	githubIconTemplate,
	instagramIconTemplate,
	linkedInIconTemplate, spotifyIconTemplate,
	twitterIconTemplate
} from "../icons";
import "../atoms/button";
import "../atoms/buttons";
import "../atoms/icon";
import "../atoms/text";
import {css, html} from "lit";

class SayHiButtons extends Buttons {
	static get styles () {
		return [
			...super.styles,
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
			<a href="https://www.instagram.com/andreas.kbh" target="_blank" rel="noopener">
				<an-button style="--background: #C13584; --foreground: var(--light);">
					<an-icon .template="${instagramIconTemplate}"></an-icon>
					<span>Instagram</span>
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

customElements.define("an-say-hi-buttons", SayHiButtons);