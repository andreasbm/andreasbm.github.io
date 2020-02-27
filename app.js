import "./molecules/header.js";
import {sharedStyles} from "./styles/shared.js";
import {css, html, LitElement} from "./web_modules/lit-element.js";
import "./atoms/text.js";
import "./atoms/container.js";

class App extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				#info-container {
					padding-top: var(--spacing-xxxxxl);
				}
			`
		];
	}

	render () {
		return html`
			<an-header id="header"></an-header>	
			<an-container id="info-container" size="small">
				<an-text center>I'm a web developer from Denmark. I love building new exciting things for the web. When I'm not busy working on various projects, you'll find me playing piano or watching cat videos. </an-text>
			</an-container>
			<an-container>
				<an-text role="heading" aria-level="2" center>My Projects</an-text>
				<an-project></an-project>
			</an-container>
			<p>Hello</p>
		`;
	}
}

customElements.define("an-app", App);