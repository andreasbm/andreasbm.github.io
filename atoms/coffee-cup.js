import { LitElement, html, css } from "./../web_modules/lit-element.js";
import {sharedStyles} from "./../styles/shared.js";

class Button extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
				}
			`
		];
	}

	constructor () {
		super();
		this.tabIndex = 0;
		this.role = "button";
	}

	render () {
		return html`
			<slot></slot>
		`;
	}
}

customElements.define("an-button", Button);