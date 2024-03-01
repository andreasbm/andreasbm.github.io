import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "lit";

class Container extends LitElement {

	static get properties () {
		return {
			size: {
				type: String,
				reflect: true
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: block;
					padding: var(--spacing-xxxl) var(--spacing-l);
				}
				
				:host([size="small"]) {
					--container-width: var(--container-width-m);
				}
				
				#container {
					max-width: var(--container-width, var(--container-width-l));
					width: 100%;
					margin: 0 auto;
				}
			`
		];
	}

	render () {
		return html`
			<div id="container">
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("an-container", Container);