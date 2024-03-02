import {sharedStyles} from "../styles/shared";
import "./text";
import {css, html, LitElement} from "lit";
import "./button";
import {property} from "lit/decorators/property.js";

class SectionHeader extends LitElement {
	@property({type: String}) headline: string | undefined;
	@property({type: String}) text: string | undefined;
	@property({type: Boolean}) center: boolean | undefined;

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: block;
				}
				
				#text {
					max-width: 45rem;
				}
			`
		];
	}

	render () {
		return html`
			${this.headline != null ? html`<an-text id="headline" role="heading" aria-level="2" ?center="${this.center}" margin="medium">${this.headline}</an-text>` : ""}
			${this.text != null ? html`<an-text id="text" ?center="${this.center}" margin="xlarge">${this.text}</an-text>` : ""}
		`;
	}
}

customElements.define("an-section-header", SectionHeader);