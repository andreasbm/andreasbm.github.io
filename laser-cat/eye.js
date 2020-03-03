import {getAngleBetweenPoints, getCenter} from "./util.js";

const template = document.createElement("template");
template.innerHTML = `
	<style>
    :host {
			--eye-transform: rotate(0deg);
			--eye-size: 25px;

			width: var(--eye-size);
			height: var(--eye-size);
			display: block;
			position: relative;
			transform-origin: center;
		}

		#eye, .glare {
			border-radius: 100%;
			position: absolute;
		}
		
		#eye {
			transform: var(--eye-transform);
			width: var(--eye-size);
			height: var(--eye-size);
			transform-origin: 44%;
			background: black;
		}

		.glare {
			--glare-size: calc(var(--eye-size) * 0.2);
			transform: var(--eye-transform);
			background: white;
			width: var(--glare-size);
			height: var(--glare-size);
		}

		.glare.left {
			top: calc(var(--eye-size) * 0.24);
			left: calc(var(--eye-size) * 0.28);
			transform-origin: 8%;
		}

		.glare.right {
			--glare-size: calc(var(--eye-size) * 0.12);
			top: calc(var(--eye-size) * 0.4);
			left: calc(var(--eye-size) * 0.52);
			transform-origin: 2%;
		}
  </style>
	<div id="eye"></div>
	<div class="glare left"></div>
	<div class="glare right"></div>
`;

export class Eye extends HTMLElement {
	connectedCallback () {
		const shadow = this.attachShadow({mode: "open"});
		shadow.appendChild(template.content.cloneNode(true));

		this.$eye = this.shadowRoot.querySelector("#eye");
	}

	/**
	 * Updates the position of the eye.
	 * @param {*} targetCenter
	 */
	updatePosition (targetCenter) {
		requestAnimationFrame(() => {
			const eyeCenter = getCenter(this);
			const angle = getAngleBetweenPoints(eyeCenter, targetCenter);
			this.style.setProperty("--eye-transform", `rotate(${angle}deg)`);
		});
	}

	/**
	 * Flash the eye.
	 */
	flash ({
		       background = ["black", "red", "red", "black"],
		       duration = 320,
		       easing = "ease-in-out"
	       } = {}) {
		this.$eye.animate({
			background,
		}, {
			easing,
			duration
		})
	}
}

customElements.define("laser-cat-eye", Eye);