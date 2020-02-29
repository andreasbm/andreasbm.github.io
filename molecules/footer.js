import "./../atoms/button.js";
import "./../atoms/icon.js";
import "./../atoms/text.js";
import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";

class Footer extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: block;
				}
				
				#footer {
					background: var(--space-500);
					color: var(--space-500-contrast);
					padding: var(--spacing-l) var(--spacing-xxl);
				}
			`
		];
	}

	render () {
		return html`
			<footer id="footer">
				<span>©2020 - Andreas Mehlsen</span>
			</footer>
		`;
	}
}

customElements.define("an-footer", Footer);