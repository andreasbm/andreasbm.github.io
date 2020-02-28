import "./../atoms/button.js";
import "./../atoms/icon.js";
import "./../atoms/text.js";
import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";

const PROJECT_ASSETS_BASE_PATH = `/assets/projects`;

class Project extends LitElement {
	static get properties () {
		return {
			project: {
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
				}
				
				#cover {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
				
				#content {
					background: var(--background);
					color: var(--foreground);
					border-radius: var(--border-radius-m);
				}
				
				#footer {
				
				}
				
				#logo {
				
				}
				
				#name {
				
				}
				
				#text {
				
				}
				
				#date {
				
				}
			`
		];
	}

	get coverSrc () {
		return this.project != null ? `${PROJECT_ASSETS_BASE_PATH}/${this.project}/cover.jpg` : null;
	}

	get logoSrc () {
		return this.project != null ? `${PROJECT_ASSETS_BASE_PATH}/${this.project}/logo.svg` : null;
	}

	render () {
		return html`
			${this.coverSrc != null ? html`<img id="cover" src="${this.coverSrc}" alt="${this.name || ""} cover." role="presentation" />` : ""}
			${this.date != null ? html`<div id="date">${this.date}</div>` : ""}
			<div id="content">
				${this.logoSrc != null ? html`<img id="logo" src="${this.logoSrc}" alt="${this.name || ""} logo." />` : ""}
				${this.name != null ? html`<at-text id="name" role="heading" aria-level="3">${this.name}</at-text>` : ""}
				${this.text != null ? html`<at-text id="text">${this.name}</at-text>` : ""}
			</div>
			<slot name="footer"></slot>
		`;
	}
}

customElements.define("an-project", Project);