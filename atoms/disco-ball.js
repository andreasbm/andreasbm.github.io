import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";

class DiscoBall extends LitElement {

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
				
				#ball {
				  animation: 2s linear infinite hue alternate, 600ms ease-in infinite dance alternate;
				  border-radius: 100%;
				  width: 140px;
				  height: 140px;
				  box-shadow: 0 3px 200px -3px white;
				}
				
				#hanger {
				  height: 40px;
				}
				
				@keyframes hue {
				  from { filter: hue-rotate(0deg); }
				  to { filter: hue-rotate(360deg); }
				}
				
				@keyframes dance {
				  from { transform: translateY(-5px); }
				  to { transform: translateY(0); }
				}
			`
		];
	}

	render () {
		return html`
			<img id="hanger" src="/assets/disco-ball-hanger.svg" role="presentation" alt="Thing holding the ball">
			<img id="ball" src="/assets/disco-ball.svg" role="presentation" alt="Disco Ball">
		`;
	}
}

customElements.define("an-disco-ball", DiscoBall);