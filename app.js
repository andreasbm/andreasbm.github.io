import "./atoms/buttons.js";
import "./atoms/container.js";
import "./atoms/icon.js";
import "./atoms/text.js";
import {
	arrowDownIconTemplate,
	arrowRightIconTemplate,
	githubIconTemplate,
	sendIconTemplate,
	videoIconTemplate
} from "./icons.js";
import "./molecules/header.js";
import "./molecules/project.js";
import "./molecules/social.js";
import "./molecules/footer.js";
import {sharedStyles} from "./styles/shared.js";
import {showYoutubeVideo} from "./util/show-youtube-video.js";
import {css, html, LitElement} from "./web_modules/lit-element.js";

const PROJECT_ASSETS_BASE_PATH = `/assets/projects`;
const GA_MEASUREMENT_ID = "UA-96179028-10";

function projectPath (id, extra) {
	return `${PROJECT_ASSETS_BASE_PATH}/${id}${extra != null ? `/${extra}` : ""}`;
}

function projectCover (id) {
	return projectPath(id, "cover.jpg");
}

function projectLogo (id) {
	return projectPath(id, "logo.svg");
}

class App extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				#info-container {
					padding-top: var(--spacing-xxxxxl);
				}
				
				.project:not(:last-child) {
					margin: 0 0 var(--spacing-xxl);
				}
				
				@media (max-width: 770px) {
					#contact-button, #projects-button {
						display: none;
					}
				}
			`
		];
	}

	constructor  () {
		super();

		// Track page view (we only have this one page)
		gtag("config", GA_MEASUREMENT_ID, {
			"page_path": location.pathname,
			"page_location": location.href
		});
	}

	/**
	 * Scrolls to a section of the page.
	 * @param id
	 */
	scrollTo (id) {
		let $elem = null;
		switch (id) {
			case "projects":
				$elem = this.shadowRoot.querySelector("#projects");
				break;
		}

		if ($elem != null) {
			$elem.scrollIntoView({behavior: "smooth", block: "start"});
		}
	}

	render () {
		return html`
			<!-- Header -->
			<an-header id="header" img="assets/andreas.png" text="Hi, I'm Andreas. I love building awesome things for the web.">
				<an-buttons slot="footer">
					<an-button id="projects-button" style="--background: #6D73DB; --foreground: var(--light);" @click="${() => this.scrollTo("projects")}">
						<span>See my projects</span>
						<an-icon .template="${arrowDownIconTemplate}"></an-icon>
					</an-button>
					<a id="github-button" href="https://github.com/andreasbm" target="_blank" rel="noopener">
						<an-button>
							<an-icon .template="${githubIconTemplate}"></an-icon>
							<span>Go to my Github</span>
						</an-button>
					</a>
					<a href="mailto:andmehlsen@gmail.com" target="_blank" rel="noopener" aria-label="Open email">
						<an-button id="contact-button" style="--background: var(--yellow-500); --foreground: var(--yellow-500-contrast)"  @click="${() => this.scrollTo("contact")}">
							<span>Contact me</span>
							<an-icon .template="${sendIconTemplate}"></an-icon>
						</an-button>
					</a>
				</an-buttons>
			</an-header>	
			
			<!-- Info -->
			<an-container id="info-container" size="small">
				<an-text center>I'm a web developer from Denmark. I love building new exciting things for the web. When I'm not busy working on various projects, you'll find me playing piano or watching cat videos. </an-text>
			</an-container>
			
			<!-- Projects -->
			<an-container id="projects">
				<an-text role="heading" aria-level="2" center margin="large">My Projects</an-text>
				
				<!-- Ideanote -->
				<an-project
					class="project"
					style="--theme-600: #000000; --theme-600-contrast: var(--light);"
					cover="${projectCover("ideanote")}"
					logo="${projectLogo("ideanote")}"
					date="2015 - Present"
					name="Ideanote"
					text="Ideanote is the cloud-based innovation platform that empowers your teams to capture, develop and prioritize more of the right ideas.">
					<an-buttons slot="footer">
						<an-button style="--background: #F4426E; --foreground: var(--light);" @click="${() => showYoutubeVideo({youtubeId: "9M7Aua8hc0w"})}">
							<span>Watch a product video</span>
							<an-icon .template="${videoIconTemplate}"></an-icon>
						</an-button>
						<a href="https://ideanote.io" target="_blank" rel="noopener">
							<an-button style="--background: #000000; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Lasercat -->
				<an-project
					class="project"
					style="--theme-600: #8A7225; --theme-600-contrast: var(--light); --logo-size: 80px;"
					cover="${projectCover("lasercat")}"
					logo="${projectLogo("lasercat")}"
					date="2019 - Present"
					name="Laser Cat"
					text="Shoot laser at things you want to remove from the internet.">
					<an-buttons slot="footer">
						<a href="https://lasercat.app" target="_blank" rel="noopener">
							<an-button style="--background: #8A7225; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Web skills -->
				<an-project
					class="project"
					style="--theme-600: #15873D; --theme-600-contrast: var(--light); --logo-size: 80px;"
					cover="${projectCover("webskills")}"
					logo="${projectLogo("webskills")}"
					date="2020 - Present"
					name="Web Skills"
					text="A visual overview of useful skills to learn as a web developer.">
					<an-buttons slot="footer">
						<a href="https://andreasbm.github.io/web-skills" target="_blank" rel="noopener">
							<an-button style="--background: #15873D; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Perfect Playlist -->
				<an-project
					class="project"
					style="--theme-600: #1DB954; --theme-600-contrast: var(--light); --logo-size: 80px;"
					cover="${projectCover("perfectplaylist")}"
					logo="${projectLogo("perfectplaylist")}"
					date="2019"
					name="Perfect Playlist"
					text="Create the perfect playlist based on you and your friends favorite music.">
					<an-buttons slot="footer">
						<a href="https://perfectplaylist.app" target="_blank" rel="noopener">
							<an-button style="--background: #1DB954; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Wordbase -->
				<an-project
					class="project"
					style="--theme-600: #A75C08; --theme-600-contrast: var(--light); --logo-size: 80px;"
					cover="${projectCover("wordbase")}"
					logo="${projectLogo("wordbase")}"
					date="2013 - 2016"
					name="Wordbase"
					text="Play chess with your vocabulary in Wordbase, the tactical word game that requires the strategic prowess of chess or checkers, along with a mind like a dictionary, to master.">
					<an-buttons slot="footer">
						<an-button style="--background: #00C9EA; --foreground: var(--light);" @click="${() => showYoutubeVideo({youtubeId: "7zxtR0segS8"})}">
							<span>Watch an epic battle</span>
							<an-icon .template="${videoIconTemplate}"></an-icon>
						</an-button>
						<a href="https://wordbaseapp.com" target="_blank" rel="noopener">
							<an-button style="--background: #FF8800; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Ruandpiano -->
				<an-project
					class="project"
					style="--theme-600: #151515; --theme-600-contrast: var(--light); --logo-size: 80px;"
					cover="${projectCover("ruandpiano")}"
					logo="${projectLogo("ruandpiano")}"
					date="2010 - 2013"
					name="Ruandpiano"
					text="Twins playing four-handed piano.">
					<an-buttons slot="footer">
						<an-button style="--background: var(--light); --foreground: #151515;" @click="${() => showYoutubeVideo({youtubeId: "JjydF2u0mnY"})}">
							<span>Watch my favorite recording</span>
							<an-icon .template="${videoIconTemplate}"></an-icon>
						</an-button>
						<a href="https://www.youtube.com/user/ruandpiano" target="_blank" rel="noopener">
							<an-button style="--background: #151515; --foreground: var(--light);">
								<span>Go to Youtube</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
			</an-container>
			
			<!-- Social -->
			<an-container>
				<an-social headline="Say hi" text="If you want to learn more about what I'm doing, find me on my favorite platforms."></an-social>
			</an-container>
			
			<!-- Footer -->
			<an-footer></an-footer>
		`;
	}
}

customElements.define("an-app", App);