import "./atoms/container.js";
import "./atoms/text.js";
import {arrowRightIconTemplate} from "./icons.js";
import "./molecules/header.js";
import "./molecules/project.js";
import {sharedStyles} from "./styles/shared.js";
import {css, html, LitElement} from "./web_modules/lit-element.js";

class App extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				#info-container {
					padding-top: var(--spacing-xxxxxl);
				}
				
				#project-title {
					margin: 0 0 var(--spacing-l);
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
				<an-text id="project-title" role="heading" aria-level="2" center>My Projects</an-text>
				<an-project
					project="ideanote"
					date="2015 - Present"
					name="Ideanote"
					text="Ideanote is the cloud-based innovation platform that empowers your teams to capture, develop and prioritize more of the right ideas.">
					<div slot="footer">
						<an-button>
							<span>Go to website</span>
							<an-icon .template="${arrowRightIconTemplate}"></an-icon>
						</an-button>
					</div>
				</an-project>
			</an-container>
		`;
	}
}

customElements.define("an-app", App);