import {codeIconTemplate, designIconTemplate} from "../icons";
import "../atoms/icon";
import "../atoms/text";
import {sharedStyles} from "../styles/shared";
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
				<an-text class="text" center>I’m passionate about building fast, modern, mobile-ready websites. With over a decade of experience, I take pride in creating clean, high-performing web experiences that stand out.</an-text>
			</div>
			<div class="design">
				<an-icon class="icon" .template="${designIconTemplate}"></an-icon>
				<an-text class="title" role="heading" aria-level="2" center margin="medium">Design</an-text>
				<an-text class="text" center>Design is at the heart of everything I create. It’s more than just how something looks; it’s how it feels, how it flows, and how it connects with people.</an-text>
			</div>
		`;
	}
}

customElements.define("an-skills", Skills);