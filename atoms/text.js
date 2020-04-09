import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";

class Text extends LitElement {

	static get properties () {
		return {
			heading: {
				type: String,
				reflect: true
			},
			ariaLevel: {
				type: String,
				attribute: "aria-level",
				reflect: true
			},
			center: {
				type: Boolean,
				reflect: true
			},
			margin: {
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
					font-size: var(--font-size-l);
					font-weight: var(--font-weight-t);
					line-height: var(--line-height-m);
				}
				
				:host([role="heading"]) {
					font-weight: var(--font-weight-b);
				}
				
				:host([aria-level="2"]) {
					text-transform: uppercase;
				}
				
				:host([center]) {
					text-align: center;
				}
				
				:host([margin="medium"]) {
					margin: 0 auto var(--spacing-s);
				}
				
				:host([margin="large"]) {
					margin: 0 auto var(--spacing-l);
				}
				
				:host([margin="xlarge"]) {
					margin: 0 auto var(--spacing-xxxl);
				}
			`
		];
	}

	render () {
		return html`<slot></slot>`;
	}
}

customElements.define("an-text", Text);