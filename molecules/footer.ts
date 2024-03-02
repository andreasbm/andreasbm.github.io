import "../atoms/button";
import "../atoms/icon";
import "../atoms/text";
import {sharedStyles} from "../styles/shared";
import {css, html, LitElement} from "lit";

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
				
				#email {
					color: inherit;
					text-decoration: underline;
				}
			`
		];
	}

	render () {
		return html`
			<footer id="footer">
				<span>©${(new Date()).getFullYear()} - Andreas Mehlsen - <a id="email" href="mailto:andmehlsen@gmail.com" rel="noopener" aria-label="Open email">andmehlsen@gmail.com</a></span>
			</footer>
		`;
	}
}

customElements.define("an-footer", Footer);