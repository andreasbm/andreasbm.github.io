import "../atoms/disco-ball";
import {sharedStyles} from "../styles/shared";
import {css, html, LitElement} from "lit";
import {repeat} from "lit/directives/repeat.js";
import {property} from "lit/decorators/property.js";

function randomPosition () {
	return {
		left: Math.random() * 100,
		top: Math.random() * 100
	}
}

function setRandomPosition ($elem: HTMLElement) {
	const {left, top} = randomPosition();
	$elem.style.top = `${top}%`;
	$elem.style.left = `${left}%`;
}

const STARS = [...Array(10)];
export class Party extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: block;
				    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    contain: strict;
				}
				
				:host([party]) #disco-ball {
                  transform: translate(-50%, 0);
                }
				
				:host([party]) #overlay, :host([party]) .star {
					opacity: 1;
				}
				
				#disco-ball {
					top: 0;
					left: 50%;
                  	transform: translate(-50%, -150%);
                    /* Weird bug.. transition: 200ms ease transform;*/
				}
				
				.star, #disco-ball {
					position: absolute;
					z-index: 1234;
				}
				
				.star {
					width: 40px;
					height: 40px;
					animation: 600ms ease-in-out infinite in-out alternate;
				}
				
				#overlay {
				    background: rgba(0, 0, 0, 0.6);
				    position: absolute;
				    top: 0;
				    left: 0;
				    width: 100%;
				    height: 100%;
				}
				
				#overlay, .star {
				    transition: opacity 80ms ease;
				    opacity: 0;
				}
				
				@keyframes in-out {
				  0% { transform: scale(0) }
				  50% { transform: scale(1); }
				  100% { transform: scale(0) }
				}
			`
		];
	}

	@property({type: Boolean, reflect: true}) party = false;

	starIterationComplete (e: AnimationEvent) {
		setRandomPosition(e.target as HTMLElement);
	}

	render () {
		return html`
			<an-disco-ball id="disco-ball"></an-disco-ball>
			<div id="overlay"></div>
			${repeat(STARS, () => html`
				<img class="star" src="/assets/star.svg" role="presentation" alt="Shiny star" @animationiteration="${this.starIterationComplete}" style="left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation-delay: ${Math.random() * 1000}ms" />
			`)}
		`;
	}
}

customElements.define("an-party", Party);