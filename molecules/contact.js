import "./../atoms/button.js";
import "./../atoms/icon.js";
import "./../atoms/text.js";
import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "lit";

class Contact extends LitElement {
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
				}
			`
		];
	}

	render () {
		return html`
			<p>Contact..</p>
		`;
	}
}

customElements.define("an-contact", Contact);