import { LitElement, html, css } from "./../web_modules/lit-element.js";
import {sharedStyles} from "./../styles/shared.js";

class Button extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: flex;
					cursor: pointer;
					user-select: none;
				    align-items: center;
                    line-height: 1;
                    text-decoration: none;
					font-weight: var(--font-weight-m);
					padding: var(--spacing-m) var(--spacing-xxl);
					background: var(--background);
					color: var(--foreground);
					box-shadow: var(--shadow);
					border-radius: var(--border-radius-m);
					transition: 120ms ease transform;
					transform: scale(1);
					text-transform: uppercase;
					overflow: hidden;
                    text-overflow: ellipsis;
				}
				
				:host(:hover) {
					transform: scale(1.1);
				}
				
				::slotted(an-icon) {
					flex-shrink: 0;
				}
				
				::slotted(:not(:last-child)) {
					margin: 0 var(--spacing-m) 0 0;
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

customElements.define("an-button", Button);