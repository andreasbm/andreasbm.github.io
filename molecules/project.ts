import {Card} from "../atoms/card";
import "../atoms/button";
import "../atoms/icon";
import "../atoms/text";
import {css, html} from "lit";
import {property} from "lit/decorators/property.js";

class Project extends Card {
	static get styles () {
		return [
			...super.styles,
			css`
				:host {
					background: var(--theme-600);
					padding: var(--spacing-xxxxxxl) var(--spacing-xxl);
					border-color: var(--theme-600);
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
					border: 2px solid var(--theme-600);
					background: var(--light);
					color: var(--dark);
					border-radius: var(--border-radius-m);
					padding: var(--spacing-xxxl);
					position: relative;
					text-align: center;
					max-width: 850px;
					margin: 0 auto;
				}
				
				#logo {
					width: var(--logo-size, 80px);
					height: var(--logo-size, 80px);
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
					position: absolute;
					right: var(--spacing-xxxl);
					bottom: var(--spacing-xxxl);
					display: flex;
					align-items: center;
					justify-content: flex-end;
				}
				
				@media (max-width: 800px) {
					#date {
					    left: 50%;
                        transform: translateX(-50%);
					}
					
					::slotted([slot="footer"]) {
					    position: static;
                        margin: var(--spacing-xl) 0 0 0;
					}
				}
			`
		];
	}

	@property({type: String}) cover: string | null = null;
	@property({type: String}) logo: string | null = null;
	@property({type: String}) date: string | null = null;
	@property({type: String}) name: string | null = null;
	@property({type: String}) text: string | null = null;

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