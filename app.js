import "./atoms/buttons.js";
import "./atoms/card.js";
import "./atoms/container.js";
import "./atoms/icon.js";
import "./atoms/media.js";
import "./atoms/section-header.js";
import "./atoms/text.js";
import {
	arrowDownIconTemplate,
	arrowRightIconTemplate,
	githubIconTemplate,
	openIconTemplate,
	sendIconTemplate,
	twitterIconTemplate,
	videoIconTemplate
} from "./icons.js";
import "./molecules/footer.js";
import "./molecules/header.js";
import "./molecules/project.js";
import "./molecules/skills.js";
import "./molecules/social-buttons.js";
import {sharedStyles} from "./styles/shared.js";
import {showRecapRedditVideo} from "./util/show-recap-reddit-video.js";
import {showYoutubeVideo} from "./util/show-youtube-video.js";
import {css, html, LitElement} from "./web_modules/lit-element.js";


const ASSETS_BASE_PATH = `/assets`;
const PROJECT_ASSETS_BASE_PATH = `${ASSETS_BASE_PATH}/projects`;
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

function mediaCover (id) {
	return `${ASSETS_BASE_PATH}/media/${id}.jpg`;
}

class App extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				#info-container {
					padding-top: var(--spacing-xxxxxl);
				}
				
				.card:not(:last-child) {
					margin: 0 0 var(--spacing-xxl);
				}
				
				.media-grid {
					--media-width: 200px;
					display: grid;
					grid-template-columns: repeat(4, var(--media-width));
					grid-gap: var(--spacing-xl);
                    justify-content: center;
				}
				
				#skills-card {
				    background: var(--space-500);
                    color: var(--space-500-contrast);
				}
				
				#music-card {
				}
				
				#books-card .media-grid {
					--media-height: 266px;
				}
				
				@media (max-width: 1000px) {
					#contact-button, #projects-button {
						display: none;
					}
					
					.media-grid {
						--media-width: 100%;
						grid-template-columns: repeat(auto-fill, minmax(var(--media-width), 1fr));
					}
				}
			`
		];
	}

	constructor () {
		super();

		// Track page view (we only have this one page)
		gtag("config", GA_MEASUREMENT_ID, {
			"page_path": location.pathname,
			"page_location": location.href
		});

		// Listen for CTA events
		window.addEventListener("click", e => {

			// Find the target by using the composed path to get the element through the shadow boundaries.
			const $anchor = ("composedPath" in e) ? e.composedPath().find($elem => $elem instanceof HTMLAnchorElement) : e.target;

			// Make sure the click is an anchor
			if (!($anchor instanceof HTMLAnchorElement)) {
				return;
			}

			// Track event
			gtag("event", "click_link", {
				"event_category": "cta",
				"event_label": `${$anchor.ariaLabel || $anchor.href}`,
				transport: 'beacon'
			});
		});

		// Spawn laser cat after a delay
		setTimeout(() => {
			this.spawnLaserCat();
		}, 2000);
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

	spawnLaserCat () {
		import("./laser-cat/laser-cat.js").then(() => {
			const $laserCat = document.createElement("laser-cat");
			$laserCat.setAttribute("sounds", JSON.stringify({
				meow: ["./assets/audio/meow.mp3"],
				laser: ["./assets/audio/laser.mp3"],
				rainbow: ["./assets/audio/rainbow.mp3"]
			}));
			document.body.appendChild($laserCat);
		});
	}

	render () {
		return html`
			<!-- Header -->
			<an-header id="header" img="assets/andreas.png" text="Hi, I'm Andreas. I love building awesome things for the Web.">
				<an-buttons slot="footer">
					<an-button id="projects-button" style="--background: #6D73DB; --foreground: var(--light);" @click="${() => this.scrollTo("projects")}">
						<span>See my projects</span>
						<an-icon .template="${arrowDownIconTemplate}"></an-icon>
					</an-button>
					<a id="github-button" href="https://github.com/andreasbm" rel="noopener">
						<an-button>
							<an-icon .template="${githubIconTemplate}"></an-icon>
							<span>Go to my Github</span>
						</an-button>
					</a>
					<a href="mailto:andmehlsen@gmail.com" rel="noopener" aria-label="Open email">
						<an-button id="contact-button" style="--background: var(--yellow-500); --foreground: var(--yellow-500-contrast)"  @click="${() => this.scrollTo("contact")}">
							<span>Contact me</span>
							<an-icon .template="${sendIconTemplate}"></an-icon>
						</an-button>
					</a>
				</an-buttons>
			</an-header>	
			
			<!-- Info -->
			<an-container id="info-container" size="small">
				<an-text center>I'm a web developer from Denmark. I love building new exciting things for the Web. When I'm not busy working on various projects, you'll find me playing piano or watching cat videos. </an-text>
			</an-container>
			
			<!-- Projects -->
			<an-container id="projects">
				<an-text role="heading" aria-level="2" center margin="large">My Projects</an-text>
				
				<!-- Ideanote -->
				<an-project
					class="card"
					style="--theme-600: #000000; --theme-600-contrast: var(--light); --logo-size: 60px;"
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
						<a href="https://ideanote.io" rel="noopener">
							<an-button style="--background: #000000; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Lasercat -->
				<an-project
					class="card"
					style="--theme-600: #8A7225; --theme-600-contrast: var(--light);"
					cover="${projectCover("lasercat")}"
					logo="${projectLogo("lasercat")}"
					date="2019 - Present"
					name="Laser Cat"
					text="Shoot laser at things you want to remove from the internet.">
					<an-buttons slot="footer">
						<a href="https://lasercat.app" rel="noopener">
							<an-button style="--background: #8A7225; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Web skills -->
				<an-project
					class="card"
					style="--theme-600: #15873D; --theme-600-contrast: var(--light);"
					cover="${projectCover("webskills")}"
					logo="${projectLogo("webskills")}"
					date="2020 - Present"
					name="Web Skills"
					text="A visual overview of useful skills to learn as a web developer.">
					<an-buttons slot="footer">
						<a href="https://andreasbm.github.io/web-skills" rel="noopener">
							<an-button style="--background: #15873D; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Weightless -->
				<an-project
					class="card"
					style="--theme-600: #354D8D; --theme-600-contrast: var(--light);"
					cover="${projectCover("weightless")}"
					logo="${projectLogo("weightless")}"
					date="2019 - Present"
					name="Weightless"
					text="High quality web components with a small footprint.">
					<an-buttons slot="footer">
						<a href="https://weightless.dev" rel="noopener">
							<an-button style="--background: #354D8D; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Perfect Playlist -->
				<an-project
					class="card"
					style="--theme-600: #1DB954; --theme-600-contrast: var(--light);"
					cover="${projectCover("perfectplaylist")}"
					logo="${projectLogo("perfectplaylist")}"
					date="2019"
					name="Perfect Playlist"
					text="Create the perfect playlist based on you and your friends favorite music.">
					<an-buttons slot="footer">
						<a href="https://perfectplaylist.app" rel="noopener">
							<an-button style="--background: #1DB954; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Picture Palette -->
				<an-project
					class="card"
					style="--theme-600: #000000; --theme-600-contrast: var(--light);"
					cover="${projectCover("picturepalette")}"
					logo="${projectLogo("picturepalette")}"
					date="2020"
					name="Picture Palette"
					text="Aesthetically pleasing palettes.">
					<an-buttons slot="footer">
						<a href="https://twitter.com/pic_palette" rel="noopener">
							<an-button style="--background: #82535C; --foreground: var(--light);">
								<span>Twitter Bot</span>
								<an-icon .template="${twitterIconTemplate}"></an-icon>
							</an-button>
						</a>
						<a href="https://picture-palette.web.app" rel="noopener">
							<an-button style="--background: #000000; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Recap Reddit -->
				<an-project
					class="card"
					style="--theme-600: #BF3707; --theme-600-contrast: var(--light);"
					cover="${projectCover("recapreddit")}"
					logo="${projectLogo("recapreddit")}"
					date="2020"
					name="Recap Reddit"
					text="Automatically turn Reddit posts into recap videos.">
					<an-buttons slot="footer">
						<an-button style="--background: #1A1A1C; --foreground: var(--light);" @click="${() => showRecapRedditVideo({post: "https://www.reddit.com/r/AskReddit/comments/a72nr4/whats_something_small_you_can_start_doing_today"})}">
							<span>Watch a Recap video</span>
							<an-icon .template="${videoIconTemplate}"></an-icon>
						</an-button>
						<a href="https://chrome.google.com/webstore/detail/recap-reddit/jfinbpmbkoondiikpmhdejnacmdpnahc" rel="noopener">
							<an-button style="--background: #FF4300; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Wordbase -->
				<an-project
					class="card"
					style="--theme-600: #A75C08; --theme-600-contrast: var(--light);"
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
						<a href="https://wordbaseapp.com" rel="noopener">
							<an-button style="--background: #FF8800; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Ruandpiano -->
				<an-project
					class="card"
					style="--theme-600: #151515; --theme-600-contrast: var(--light);"
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
						<a href="https://www.youtube.com/user/ruandpiano" rel="noopener">
							<an-button style="--background: #151515; --foreground: var(--light);">
								<span>Go to Youtube</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
			</an-container>
			<an-container>
			
				<!-- Skills -->
				<an-text role="heading" aria-level="2" center margin="large">What I do</an-text>
				<an-card class="card" id="skills-card">
					<an-skills></an-skills>
				</an-card>
				
				<!-- Music -->
				<an-card class="card" id="music-card">
					<an-section-header center headline="My favorite music" text="I listen to music every day - try to listen to some of my favorite tunes. I hope you like them as much as I do!"></an-section-header>
					<div class="media-grid">
						<a aria-label="Prep link" href="https://open.spotify.com/playlist/2CTXQsLLL6UiquApb3rf5F?si=gqYvx2McR1OiFvA4Wp4N-w" rel="noopener">
							<an-media src="${mediaCover("prep")}"></an-media>
						</a>
						<a aria-label="Deluxe link" href="https://open.spotify.com/playlist/3lrUwE6yLty0NxTR5RDH9b?si=gXX5nWtqQfCGig99zpZv1A" rel="noopener">
							<an-media src="${mediaCover("deluxe")}"></an-media>
						</a>
						<a aria-label="Bastille link" href="https://open.spotify.com/playlist/4SW2xyUZlNev7RQdq800Ty?si=uuGqMZKcTcqNLxzScWgTbg" rel="noopener">
							<an-media src="${mediaCover("bastille")}"></an-media>
						</a>
						<a aria-label="Two Door Cinema Club link" href="https://open.spotify.com/playlist/6Ig3Hmv4EZmWQcwIsH6bP3?si=ErlfCQj_TF2we5HDEPZyfQ" rel="noopener">
							<an-media src="${mediaCover("two-door-cinema-club")}"></an-media>
						</a>
					</div>
				</an-card>
				
				<!-- Books -->
				<an-card class="card" id="books-card">
					<an-section-header center headline="My favorite books" text="I find reading books to be a great way to relax. If you have time, check out some of my favorites."></an-section-header>
					<div class="media-grid">
						<a aria-label="Refactoring UI link" href="https://refactoringui.com/" rel="noopener">
							<an-media src="${mediaCover("refactoring-ui")}" .iconTemplate="${openIconTemplate}"></an-media>
						</a>
						<a aria-label="Badass link" href="https://www.amazon.com/Badass-Making-Awesome-Kathy-Sierra/dp/1491919019" rel="noopener">
							<an-media src="${mediaCover("badass")}" .iconTemplate="${openIconTemplate}"></an-media>
						</a>
						<a aria-label="The Ego Tunnel link" href="https://www.amazon.com/Ego-Tunnel-Science-Mind-Myth/dp/0465020690" rel="noopener">
							<an-media src="${mediaCover("the-ego-tunnel")}" .iconTemplate="${openIconTemplate}"></an-media>
						</a>
						<a aria-label="Two Door Cinema Club link" href="https://samharris.org/books/waking-up" rel="noopener">
							<an-media src="${mediaCover("waking-up")}" .iconTemplate="${openIconTemplate}"></an-media>
						</a>
					</div>
				</an-card>
				
				<!-- Podcasts -->
				<an-card class="card" id="podcast-card">
					<an-section-header center headline="My favorite podcasts" text="Every day when I bike through Copenhagen I enjoy listening to podcasts. Here are some of my favorites!"></an-section-header>
					<div class="media-grid">
						<a aria-label="Making Sense link" href="https://open.spotify.com/show/5rgumWEx4FsqIY8e1wJNAk?si=w2cyVtAiTHmaH8mI-O1lSg" rel="noopener">
							<an-media src="${mediaCover("making-sense")}"></an-media>
						</a>
						<a aria-label="Reply All link" href="https://open.spotify.com/show/7gozmLqbcbr6PScMjc0Zl4?si=BEO9nQ8aQCaHzzxNlNqNQQ" rel="noopener">
							<an-media src="${mediaCover("reply-all")}"></an-media>
						</a>
						<a aria-label="Invisible link" href="https://open.spotify.com/show/2VRS1IJCTn2Nlkg33ZVfkM?si=GwXze2vySPqdmt5AaBBNJg" rel="noopener">
							<an-media src="${mediaCover("invisible")}"></an-media>
						</a>
						<a aria-label="Syntax link" href="https://open.spotify.com/show/4kYCRYJ3yK5DQbP5tbfZby?si=bWrUaPmBR1Kio2VIXF3prA" rel="noopener">
							<an-media src="${mediaCover("syntax")}"></an-media>
						</a>
					</div>
				</an-card>
				
				<!-- Social -->
				<an-card class="card">
					<an-section-header center headline="Say hi" text="If you want to learn more about what I'm doing, find me on my favorite platforms."></an-section-header>
					<an-social-buttons></an-social-buttons>
				</an-card>
			
			</an-container>
			
			<!-- Footer -->
			<an-footer></an-footer>
		`;
	}
}

customElements.define("an-app", App);