import {LitElement, html, css, PropertyValues} from "lit";
import {sharedStyles} from "../styles/shared";

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
			        justify-content: center;
                    line-height: 1;
                    text-decoration: none;
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
                    outline: none;
				}
				
				:host(:hover), :host(:focus-visible) {
					transform: scale(1.06);
				}
				
				:host(:focus-visible) {
					box-shadow: 0 0 0 3px var(--red-500);	
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

	protected firstUpdated(props: PropertyValues) {
		super.firstUpdated(props);
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