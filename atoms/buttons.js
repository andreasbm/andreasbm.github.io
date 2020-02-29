import { LitElement, html, css } from "./../web_modules/lit-element.js";
import {sharedStyles} from "./../styles/shared.js";

class Buttons extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: inline-flex;
					align-items: center;
				}
				
				::slotted(:not(:last-child)) {
					margin: 0 var(--spacing-xxl) 0 0;
				}
				
				@media (max-width: 770px) {
					:host {
						flex-direction: column;
						align-items: stretch;
						justify-content: stretch;
					}
					
					::slotted(*) {
						width: 100%;
					}
					
					::slotted(:not(:last-child)) {
						margin: 0 0 var(--spacing-l);
					}
					
					::slotted(:first-child:last-child) (
						margin: 0;
					}
				}
			`
		];
	}

	render () {
		return html`
			<slot></slot>
		`;
	}
}

customElements.define("an-buttons", Buttons);