import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";

class Icon extends LitElement {

	static get properties () {
		return {
			template: {
				type: Object
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: flex;
					width: 20px;
					height: 20px;
				}
			`
		];
	}

	render () {
		return html`${this.template}`;
	}
}

customElements.define("an-icon", Icon);