import {sharedStyles} from "../styles/shared";
import {css, html, LitElement} from "lit";
import {property} from "lit/decorators/property.js";

class Container extends LitElement {

	@property({type: String, reflect: true}) size: "small" | "medium" = "medium";

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