import "./../atoms/button.js";
import "./../atoms/icon.js";
import "./../atoms/text.js";
import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";

class Project extends LitElement {
	static get properties () {
		return {
			cover: {
				type: String
			},
			logo: {
				type: String
			},
			date: {
				type: String
			},
			name: {
				type: String
			},
			text: {
				type: String
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: block;
					position: relative;
					overflow: hidden;
					background: var(--background);
					border-radius: var(--border-radius-m);
					box-shadow: var(--shadow);
					padding: var(--spacing-xxxxxl) var(--spacing-xxl) var(--spacing-xxxl);
				}
				
				#cover {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					/*filter: blur(var(--cover-blur, 8px));*/
					
					/* Scale to get rid of ugly blur edge */
					/*transform: scale(1.1);*/ 
					object-fit: cover;
				}
				
				#content {
					background: var(--light);
					color: var(--dark);
					border-radius: var(--border-radius-m);
					padding: var(--spacing-xxxl);
					box-shadow: var(--shadow);
					position: relative;
					text-align: center;
					max-width: 850px;
					margin: 0 auto;
				}
				
				#footer {
				
				}
				
				#logo {
					width: var(--logo-size, 60px);
					height: var(--logo-size, 60px);
					object-fit: contain;
					margin: 0 0 var(--spacing-m);
				}
				
				#name {
					font-size: var(--font-size-xl);
				}
				
				#text {
				}
				
				#date {
					position: absolute;
					top: var(--spacing-m);
					left: var(--spacing-m);
					font-size: var(--font-size-s);
					border-radius: var(--border-radius-s);
					padding: 0 var(--spacing-s);
					line-height: 2;
					border: 1px solid var(--theme-600, #0D0E34);
					color: var(--theme-600, #0D0E34);
					background: var(--theme-600-contrast, white);
				}
				
				::slotted([slot="footer"]) {
				    margin-top: var(--spacing-xxxl);
					display: flex;
					align-items: center;
					justify-content: flex-end;
				}
				
				@media (max-width: 800px) {
					#date {
					    left: 50%;
                        transform: translateX(-50%);
					}
				}
			`
		];
	}

	render () {
		return html`
			${this.cover != null ? html`<img id="cover" loading="lazy" src="${this.cover}" alt="${this.name || ""} cover." role="presentation" />` : ""}
			${this.date != null ? html`<div id="date">${this.date}</div>` : ""}
			<div id="content">
				${this.logo != null ? html`<img id="logo" loading="lazy" src="${this.logo}" alt="${this.name || ""} logo." />` : ""}
				${this.name != null ? html`<an-text id="name" role="heading" aria-level="3">${this.name}</an-text>` : ""}
				${this.text != null ? html`<an-text id="text">${this.text}</an-text>` : ""}
			</div>
			<slot name="footer"></slot>
		`;
	}
}

customElements.define("an-project", Project);