import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";
import "./../atoms/coffee-cup.js";

class CoffeeButton extends LitElement {

	static get properties () {
		return {
			href: {
				type: String
			},
			message: {
				type: String
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				#container {
					--icon-size: 25px;
					z-index: 123456;
					position: fixed;
					bottom: 0;
					right: 0;
					left: 0;
					padding: var(--spacing-xl);
					display: flex;
					align-items: center;
					justify-content: flex-end;
					pointer-events: none;
				}
				
				#link, #message {
					background: var(--space-500);
					color: var(--space-500-contrast);
					box-shadow: var(--shadow);
				}
				
				#link {
					width: 60px;
					height: 60px;
					border-radius: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					outline: none;
					transition: transform 120ms ease;
					flex-shrink: 0;
					pointer-events: all;
				}
				
				#container:hover #link, #container:focus-within #link {
					transform: scale(1.05);
				}
				
				#container:hover #message, #container:focus-within #message {
					opacity: 1;
					transform: translateX(0);
					pointer-events: all;
				}
				
				#message {
					margin-right: calc(var(--tooltip-arrow-size, 10px) * 2);
					opacity: 0;
					transform: translateX(10px);
					transition: 120ms ease transform, 120ms ease opacity;
					padding: var(--spacing-l) var(--spacing-xxl);
					border-radius: 100px;
					max-width: 650px;
					line-height: 1.2;
				}
				
				#message:before {
					content: "";
					position: absolute;
					top: 50%;
					left: 99.5%;
					transform: translate(0, -50%);
					width: 0; 
					height: 0; 
					border-top: 10px solid transparent;
					border-bottom: 10px solid transparent;
					border-left: 10px solid var(--space-500);
				}
				
				@media (max-width: 800px) {
					#message {
						display: none;
					}
				}
			`
		];
	}

	render () {
		return html`
			<div id="container">
				${this.message != null ? html`
					<div id="message">${this.message}</div>
				` : undefined}
				<a id="link" href="${this.href}" tabindex="0" target="_blank" rel="noopener" aria-label="Coffee link">
					<an-coffee-cup></an-coffee-cup>
				</a>
			</div>
		`;
	}
}

customElements.define("an-coffee-button", CoffeeButton);