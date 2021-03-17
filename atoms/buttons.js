import { LitElement, html, css } from "./../web_modules/lit-element.js";
import {sharedStyles} from "./../styles/shared.js";

export class Buttons extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: inline-flex;
					align-items: center;
				}
				
				::slotted(:not(:last-child)), :host > :not(:last-child) {
					margin: 0 var(--spacing-xxl) 0 0;
				}
				
				@media (max-width: 1000px) {
					:host {
						flex-direction: column;
						align-items: stretch;
						justify-content: stretch;
					}
					
					::slotted(*), :host > * {
						width: 100%;
					}
					
					::slotted(:not(:last-child)), :host > :not(:last-child) {
						margin: 0 0 var(--spacing-l);
					}
					
					::slotted(:first-child:last-child), :host > :first-child:last-child (
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