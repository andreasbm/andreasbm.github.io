import {coffeeIconTemplate} from "../icons.js";
import "./icon.js";
import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "lit";

class CoffeeCup extends LitElement {

	static get properties () {
		return {
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					position: relative;
				}
				
				#steam {
				  position: absolute;
				  width: 60%;
				  bottom: 100%;
				  left: 50%;
				  animation: 6s linear steaming infinite;
				  filter: blur(2px);
				  color: #CCCACA;
				}
				
				@keyframes steaming {
				  0% {
					opacity: 0;
					transform: translate(-50%, 100%) rotate(40deg);
				  }
				  50% {
					opacity: 1;
					transform: translate(-50%, 0);
				  }
				  100% {
					opacity: 0;
					transform: translate(-50%, -80%) rotate(40deg);
				  }
				}
			`
		];
	}

	render () {
		return html`
			<svg id="steam" viewBox="0 0 250 327" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="41"><path d="M119.563 265.584c-27-20.344-43.822-41.277-50.465-62.8-6.643-21.522-7.9-45.48-3.771-71.875M170.152 189.86c12.91-24.089 19.139-47.393 18.685-69.913-.453-22.52-5.297-42.502-14.53-59.947"/></g></svg>
			<an-icon .template="${coffeeIconTemplate}"></an-icon>
		`;
	}
}

customElements.define("an-coffee-cup", CoffeeCup);