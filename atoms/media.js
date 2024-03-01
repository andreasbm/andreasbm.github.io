import {playIconTemplate} from "../icons.js";
import {css, html} from "lit";
import {Card} from "./card.js";

export class Media extends Card {
	static get properties () {
		return {
			src: {
				type: String
			},
			iconTemplate: {
				type: Object
			}
		}
	}

	static get styles () {
		return [
			super.styles,
			css`
				:host {
					width: var(--media-width, 200px);
					height: var(--media-height, 200px);
					color: var(--light);
					cursor: pointer;
                    background-color: white;
				}
				
				#img, #overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
				
				#img {
					object-fit: cover;
				}
				
				#overlay {
					background: rgba(0, 0, 0, 0.7);
				}
				
				#icon {
					--icon-size: 30px;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
				
				#overlay, #icon {
					transition: 120ms ease opacity;
					opacity: 0;
				}
				
				:host(:hover) #overlay, :host(:hover) #icon {
					opacity: 1;
				}


			     @media (max-width: 1000px) {
					#img {
                      object-fit: contain;
					}
			     }
			`
		];
	}

	render () {
		return html`
			${this.src != null ? html`<img id="img" src="${this.src}" role="presentation" loading="lazy" />` : ""}
			<div id="overlay"></div>
			<an-icon id="icon" .template="${this.iconTemplate || playIconTemplate}" aria-label="Play icon"></an-icon>
		`;
	}
}

customElements.define("an-media", Media);