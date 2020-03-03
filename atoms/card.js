import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";

export class Card extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: block;
					background: var(--shade-300);
					color: var(--shade-300-contrast);
					border-radius: var(--border-radius-m);
					padding: var(--spacing-xxxxl);
					box-shadow: var(--shadow);
					position: relative;
					overflow: hidden;
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

customElements.define("an-card", Card);