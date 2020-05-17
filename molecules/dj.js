import "./../atoms/disco-ball.js";
import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";

function randomPosition () {
	return {
		left: Math.random() * 100,
		top: Math.random() * 100
	}
}

function setRandomPosition ($elem) {
	const {left, top} = randomPosition();
	$elem.style.top = `${top}%`;
	$elem.style.left = `${left}%`;
}

const STARS = [...Array(10)];
class Dj extends LitElement {

	static get properties () {
		return {
			party: {
				type: Boolean,
				reflect: true
			}
		}
	}

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
				}
				
				:host([party]) {
				    background: rgba(0, 0, 0, 0.6);
				}
				
				:host([party]) #disco-ball {
					transform: translate(-50%, 0);
				}
				
				#disco-ball {
					top: 0;
					left: 50%;
					transform: translate(-50%, -150%);
					transition: 200ms ease transform;
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
				
				@keyframes in-out {
				  0% { transform: scale(0) }
				  50% { transform: scale(1); }
				  100% { transform: scale(0) }
				}
			`
		];
	}

	starIterationComplete (e) {
		setRandomPosition(e.target);
	}

	render () {
		return html`
			<an-disco-ball id="disco-ball"></an-disco-ball>
			${this.party ? STARS.map(() => html`
				<img class="star" src="/assets/star.svg" role="presentation" alt="Shiny star" @animationiteration="${this.starIterationComplete}" style="left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation-delay: ${Math.random() * 1000}ms" />
			`) : undefined}
		`;
	}
}

customElements.define("an-dj", Dj);