import "./../atoms/button.js";
import "./../atoms/icon.js";
import "./../atoms/text.js";
import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";

class Project extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				
			`
		];
	}

	render () {
		return html`
		`;
	}
}

customElements.define("an-project", Project);