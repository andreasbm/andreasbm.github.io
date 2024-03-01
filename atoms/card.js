import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "lit";

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
					border: 2px solid var(--shade-600);
					padding: var(--spacing-xxxxl);
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