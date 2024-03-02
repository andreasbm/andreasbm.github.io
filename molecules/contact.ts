import "../atoms/button";
import "../atoms/icon";
import "../atoms/text";
import {sharedStyles} from "../styles/shared";
import {css, html, LitElement} from "lit";
import {property} from "lit/decorators/property.js";

class Contact extends LitElement {
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

	@property({type: String}) headline: string | undefined;
	@property({type: String}) text: string | undefined;

	render () {
		return html`
			<p>Contact..</p>
		`;
	}
}

customElements.define("an-contact", Contact);