import {sharedStyles} from "../styles/shared.js";
import "./../atoms/text.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";
import "./button.js";

class SectionHeader extends LitElement {
	static get properties () {
		return {
			headline: {
				type: String
			},
			text: {
				type: String
			},
			center: {
				type: Boolean
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: block;
				}
				
				#text {
					max-width: 45rem;
				}
			`
		];
	}

	render () {
		return html`
			${this.headline != null ? html`<an-text id="headline" role="heading" aria-level="2" ?center="${this.center}" margin="medium">${this.headline}</an-text>` : ""}
			${this.text != null ? html`<an-text id="text" ?center="${this.center}" margin="xlarge">${this.text}</an-text>` : ""}
		`;
	}
}

customElements.define("an-section-header", SectionHeader);