import {codeIconTemplate, designIconTemplate} from "../icons.js";
import "./../atoms/icon.js";
import "./../atoms/text.js";
import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "lit";

class Skills extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: flex;
				}
				
				.code, .design {
					width: 100%;
				}
				
				.code {
					margin: 0 var(--spacing-m) 0 0;
				}
				
				.text {
					font-size: var(--font-size-m);
				}
				
				.icon {
					--icon-size: 60px;
					margin: 0 auto var(--spacing-l);
				}
				
				@media (max-width: 800px) {
					:host {
						display: block;
					}
					
					.code {
						margin: 0 0 var(--spacing-xxxl);
					}
				}
					
			`
		];
	}

	render () {
		return html`
			<div class="code">
				<an-icon class="icon" .template="${codeIconTemplate}"></an-icon>
				<an-text class="title" role="heading" aria-level="2" center margin="medium">Web Development</an-text>
				<an-text class="text" center>I have a great love for building fast, modern, mobile-ready websites. I have been building website for a decade which shines through in my projects.</an-text>
			</div>
			<div class="design">
				<an-icon class="icon" .template="${designIconTemplate}"></an-icon>
				<an-text class="title" role="heading" aria-level="2" center margin="medium">Design</an-text>
				<an-text class="text" center>Design is at the core of every projects I make. I believe the best user experiences are achieved when building beautiful experiences for actual people.</an-text>
			</div>
		`;
	}
}

customElements.define("an-skills", Skills);