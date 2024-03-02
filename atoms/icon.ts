import {sharedStyles} from "../styles/shared";
import {css, html, LitElement, TemplateResult} from "lit";
import {property} from "lit/decorators/property.js";

class Icon extends LitElement {
	@property({type: Object}) template!: TemplateResult;

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: flex;
					width: var(--icon-size, 20px);
					height: var(--icon-size, 20px);
				}
			`
		];
	}

	render () {
		return html`${this.template}`;
	}
}

customElements.define("an-icon", Icon);