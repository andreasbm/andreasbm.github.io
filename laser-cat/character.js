import {getCenter, getDefaultBlacklistedTagNames, getDefaultBlacklistedTargets, stopEvent} from "./util.js";
import {Soundbox} from "./soundbox.js";

export const sharedCharacterStyles = `
	:host {
		display: inline-flex;
		position: fixed;
		bottom: 0;
		left: 12px;
		z-index: 9999999;
		cursor: pointer;

		transform: translateY(90%);
		transition: transform ease-in-out 200ms;
	}

	:host(:hover) {
		transform: translateY(43%);
	}

	:host([active]) {
		transform: translateY(13%);
	}

	.eye {
		position: absolute;
		top: 66px;
		--transform: rotate(0deg);
	}

	.eye.left {
		left: 38px;
	}

	.eye.right {
		right: 38px;
	}

	#head {
		transform-origin: center center;
		transform: var(--transform);
	}
`;

export class Character extends HTMLElement {

	static get observedAttributes () {
		return ["active", "sounds", "muted"];
	}

	/** Whether the cat is active */
	set active (value) {
		value ? this.setAttribute("active", "") : this.removeAttribute("active");
	}

	get active () {
		return this.hasAttribute("active");
	}

	/** Sounds map */
	set sounds (value) {
		this.setAttribute("sounds", JSON.stringify(value));
	}

	get sounds () {
		try {
			return JSON.parse(this.getAttribute("sounds"));
		} catch (err) {
			return {};
		}
	}

	/** Whether the sound is muted */
	set muted (value) {
		value ? this.setAttribute("muted", "") : this.removeAttribute("muted");
	}

	get muted () {
		return this.hasAttribute("muted");
	}

	/**
	 * Hooks up the element
	 */
	connectedCallback (template) {

		// The code below should be in the constructor. However, in order
		// for it to work with custom-elements-es5-adapter.js it needs to be
		// in the constructor instead.
		const shadow = this.attachShadow({mode: "open"});
		shadow.appendChild(template.content.cloneNode(true));

		this.$crosshairStyle = document.createElement("style");
		this.$crosshairStyle.innerHTML = `
			* {
				cursor: crosshair !important;
			}
		`;
		// End code that can't be in the constructor..

		this.soundbox = new Soundbox(this.sounds);

		this.toggle = this.toggle.bind(this);
		this.addEventListener("click", this.toggle);

		this.setRandomPosition();

		this.eyes = Array.from(this.shadowRoot.querySelectorAll(".eye"));
		this.$head = this.shadowRoot.querySelector("#head");
	}

	/**
	 * Hide the cat when it is disconneted
	 */
	disconnectedCallback () {
		this.hide();
	}

	/**
	 * Sets a random X position.
	 */
	setRandomPosition () {
		const left = Math.max(10, Math.min(Math.random() * 100, 70));
		this.style.left = `${left}%`;
	}

	/**
	 * React to property changes
	 * @param {*} name
	 * @param {*} newValue
	 * @param {*} olValue
	 */
	attributeChangedCallback (name, newValue, olValue) {
		switch (name) {
			case "active":
				if (this.active) {
					this.attach();
				} else {
					this.detach();
				}
				break;
			case "sounds":
				this.soundbox = new Soundbox(this.sounds);
				break;
		}
	}

	/**
	 * Toggles the active property of the character.
	 */
	toggle () {
		if (this.active) {
			this.hide();
		} else {
			this.show();
		}
	}

	/**
	 * Shows the character.
	 */
	show () {
		this.active = true;
	}

	/**
	 * Hides the character.
	 */
	hide () {
		this.active = false;
	}

	/**
	 * Attaches the active listener.
	 */
	attach () {
		this.detach();

		this.didClickPage = this.didClickPage.bind(this);
		this.didMoveMouse = this.didMoveMouse.bind(this);
		this.didPressKey = this.didPressKey.bind(this);

		window.addEventListener("click", this.didClickPage, {capture: true});
		window.addEventListener("keydown", this.didPressKey, {capture: true});
		window.addEventListener("mousemove", this.didMoveMouse, {capture: true, passive: true});

		if (this.$crosshairStyle != null) {
			document.body.appendChild(this.$crosshairStyle)
		}
	}

	/**
	 * Detaches the active listeners.
	 */
	detach () {
		window.removeEventListener("click", this.didClickPage, {capture: true});
		window.removeEventListener("keydown", this.didPressKey, {capture: true});
		window.removeEventListener("mousemove", this.didMoveMouse, {capture: true, passive: true});
		if (this.$crosshairStyle != null) {
			this.$crosshairStyle.remove();
		}
	}

	/**
	 * Returns a target if it is a valid target.
	 * @param {*} e
	 */
	getTargetFromClickPageEvent (e) {

		// Check if we should interact with the element
		const {target, path} = e;
		if (target == null
			|| getDefaultBlacklistedTargets().includes(target)
			|| getDefaultBlacklistedTagNames().includes(target.tagName)) {
			return null;
		}

		// Find the target (we want to pick the target that was clicked, not the parent (etc. if its a web component))
		return path != null && path.length > 0 ? path[0] : target;
	}

	/**
	 * Start shooting!
	 * @param {*} e
	 */
	didClickPage (e) {
		const $target = this.getTargetFromClickPageEvent(e);

		if ($target != null) {
			stopEvent(e);

			// Do something with the target if one was found
			this.handleDidClickTarget(e, $target);
		}
	}

	/**
	 * Handles that a key was pressed.
	 * @param {*} e
	 */
	didPressKey (e) {
		switch (e.code) {
			case "Escape":
				this.hide();
				stopEvent(e);
				break;
		}
	}

	/**
	 * Handle that the mouse moved.
	 * Update the eye position when the mouse moves
	 * @param {*} e
	 */
	didMoveMouse (e) {
		const targetCenter = {x: e.clientX, y: e.clientY};

		// Update position of eyes
		for (const $eye of (this.eyes || [])) {
			$eye.updatePosition(targetCenter);
		}

		// Update position of head
		if (this.$head != null) {
			this.updateHeadPosition(this.$head, targetCenter);
		}
	}

	/**
	 * Updates the position of the head
	 * @param {*} $head
	 * @param {*} targetCenter
	 */
	updateHeadPosition ($head, targetCenter) {
		requestAnimationFrame(() => {
			const headCenter = getCenter($head);
			const diffX = Math.max(Math.min((targetCenter.x - headCenter.x) / 30, 3), -3);
			const diffY = Math.max(Math.min((targetCenter.y - headCenter.y) / 30, 3), -3);

			$head.style.setProperty("--transform", `translate(${diffX}px, ${diffY}px)`);
		});
	}

	/**
	 * Handles that a target was clicked.
	 * @param {*} e
	 * @param {*} $target
	 */
	handleDidClickTarget (e, $target) {
		// TODO: Implement
	}

	/**
	 * Sets the colors of the character.
	 * If no colors are provided the color will default.
	 * @param {*} colors
	 */
	setColors (colors) {
		// TODO: Implement
	}

	/**
	 * Resets the theme.
	 */
	resetColors () {
		this.setColors();
	}

	/**
	 * Sets dark theme.
	 */
	setDarkColors () {
		// TODO: Implement
	}

	/**
	 * Add points to the user.
	 * @param {*} points
	 */
	addPoints (points) {
		this.dispatchEvent(new CustomEvent("addPoints", {
			detail: {points},
			bubbles: true,
			composed: true
		}));
	}
}