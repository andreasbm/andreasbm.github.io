import {sharedStyles} from "../styles/shared";
import {css, html, LitElement} from "lit";
import {property} from "lit/decorators/property.js";

class Text extends LitElement {
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

	@property({type: String, reflect: true}) heading = "";
	@property({type: String, attribute: "aria-level", reflect: true}) ariaLevel = "";
	@property({type: Boolean, reflect: true}) center = false;
	@property({type: String, reflect: true}) margin = "";

	render () {
		return html`<slot></slot>`;
	}
}

customElements.define("an-text", Text);