import "./atoms/buttons";
import "./atoms/card";
import "./atoms/container";
import "./atoms/icon";
import "./atoms/media";
import "./atoms/section-header";
import "./atoms/text";
import "./atoms/coffee-cup";
import {
    appleIconTemplate,
    arrowDownIconTemplate,
    arrowRightIconTemplate,
    githubIconTemplate,
    linkedInIconTemplate,
    openIconTemplate,
    twitterIconTemplate,
    videoIconTemplate
} from "./icons";
import "./molecules/footer";
import "./molecules/header";
import "./molecules/project";
import "./molecules/skills";
import "./molecules/say-hi-buttons";
import "./molecules/coffee-button";
import {sharedStyles} from "./styles/shared";
import {css, html, LitElement, PropertyValues} from "lit";
import {query} from "lit/decorators/query.js";
import {Header} from "./molecules/header";
import {Party} from "./molecules/party";
import {showYoutubeVideo} from "./util/show-youtube-video";
import { showTerms } from "./util/show-terms";
import { mediaCover, projectCover, projectLogo } from "./util/project-util";
import { ProjectId } from "./model/project";


const GA_MEASUREMENT_ID = "UA-96179028-10";
const COFFEE_LINK = "https://buymeacoff.ee/AndreasMehlsen";



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
					box-shadow: 0 2px 10px -5px var(--space-600);
				}
				
				#coffee-card {
					background: var(--blue-500);
					color: var(--blue-500-contrast);
					box-shadow: 0 2px 10px -5px var(--blue-600);
				}
				
				#skills-card, #coffee-card {
					border: none;
				}
				
				#music-card {
				}
				
				#books-card .media-grid {
					--media-height: 266px;
				}
				
				#coffee-button {
					--background: var(--blue-600);
					--foreground: var(--blue-600-contrast);
					padding: var(--spacing-xl) var(--spacing-xxl);
				    font-size: 1.2rem;
				    z-index: 123456;
                    position: relative;
				}
				
				@media (max-width: 1000px) {
					#contact-button, #projects-button {
						display: none;
					}
					
					.media-grid {
						--media-width: 100%;
						grid-template-columns: repeat(auto-fill, minmax(var(--media-width), 1fr));
					}
					
					#coffee-fab-button {
						display: none;
					}
				}
			`
		];
	}

	@query("#header") $header!: Header;
	@query("#projects") $projects!: HTMLElement;

	constructor () {
		super();

		// Track page view (we only have this one page)
		(window as any).gtag("config", GA_MEASUREMENT_ID, {
			"page_path": location.pathname,
			"page_location": location.href
		});

		// Listen for CTA events
		window.addEventListener("click", e => {

			// Find the target by using the composed path to get the element through the shadow boundaries.
			const $anchor = e.composedPath().find($elem => $elem instanceof HTMLAnchorElement) ?? e.target as HTMLElement;

			// Make sure the click is an anchor
			if (!($anchor instanceof HTMLAnchorElement)) {
				return;
			}

			// Track event
			(window as any).gtag("event", "click_link", {
				"event_category": "cta",
				"event_label": `${$anchor.ariaLabel || $anchor.href}`,
				transport: 'beacon'
			});
		});
	}


	firstUpdated (e: PropertyValues) {
		super.firstUpdated(e);

        const params = new URLSearchParams(window.location.search);
        if (params.has("terms")) {
            showTerms(params.get("terms") as ProjectId);
        }

		// Defer resources that are nice to have
		setTimeout(() => {
			import("./molecules/coffee-button").then();
		}, 2000);
	}

	scrollToProjects () {
		this.$projects.scrollIntoView({behavior: "smooth", block: "start"});
	}

	async startParty () {
		await import("./molecules/party");

		// Query or append the dj element
		this.removeParty();
		const $party = new Party();
		$party.classList.add("party");
		document.body.appendChild($party);

		// Set timeout to make it animate
		setTimeout(() => {
			$party.party = true;
		}, 100);

		this.$header.img = `assets/andreas-disco.png`;
		this.$header.pause = true;
	}

	removeParty () {
		const $parties = Array.from(document.querySelectorAll(".party"));
		for (const $party of $parties) {
			$party.remove();
		}
	}

	stopParty () {
		this.$header.img = `assets/andreas.png`;
		this.$header.pause = false;
		const $parties = Array.from(document.querySelectorAll(".party"));

		for (const $party of $parties) {
			$party.removeAttribute("party");
			setTimeout(() => {
				$party.remove();
			}, 200);
		}
	}

	/**
	 * Renders the element.
	 * @returns {f}
	 */
	render () {
		return html`
			<!-- Header -->
			<an-header id="header" img="assets/andreas.png"
					   text="Hi, I’m Andreas. I build fun and useful things for the web.">
				<an-buttons slot="footer">
					<an-button id="projects-button" style="--background: #6D73DB; --foreground: var(--light);"
							   @click="${() => this.scrollToProjects()}">
						<span>See my projects</span>
						<an-icon .template="${arrowDownIconTemplate}"></an-icon>
					</an-button>
					<a id="github-button" aria-label="Github link" href="https://github.com/andreasbm" rel="noopener">
						<an-button>
							<an-icon .template="${githubIconTemplate}"></an-icon>
							<span>Go to my Github</span>
						</an-button>
					</a>
					<a href="https://www.linkedin.com/in/andreasmehlsen" rel="noopener" aria-label="Say hi">
						<an-button id="contact-button"
								   style="--background: var(--yellow-500); --foreground: var(--yellow-500-contrast)">
							<span>Say hi on LinkedIn</span>
							<an-icon .template="${linkedInIconTemplate}"></an-icon>
						</an-button>
					</a>
				</an-buttons>
			</an-header>

			<!-- Info -->
			<an-container id="info-container" size="small">
				<an-text center>I'm a web developer from Denmark. I love building new exciting things for the Web. When
					I'm not busy working on various projects, you'll find me playing piano or sketching new ideas.
				</an-text>
			</an-container>

			<!-- Projects -->
			<an-container id="projects">
				<an-text role="heading" aria-level="2" center margin="large">My Projects</an-text>

                <!-- JLPT Drills -->
                <an-project
                        class="card"
                        style="--theme-600: #0e0e0e; --theme-600-contrast: var(--light);"
                        cover="${projectCover("jlptdrills")}"
                        logo="${projectLogo("jlptdrills")}"
                        date="2025 - Present"
                        name="JLPT Drills"
                        text="A study app that helps Japanese learners prepare for the JLPT N5 exam with over 1,000 mock questions.">
                    <an-buttons slot="footer">
                        <a href="https://apps.apple.com/app/id6752223224" rel="noopener" aria-label="JLPT Drills link">
                            <an-button style="--background: #D93635; --foreground: var(--light);">
                                <span>Go to App Store</span>
                                <an-icon .template="${appleIconTemplate}"></an-icon>
                            </an-button>
                        </a>
                    </an-buttons>
                </an-project>

				<!-- Ideamap -->
				<an-project
					class="card"
					style="--theme-600: #0e0e0e; --theme-600-contrast: var(--light);"
					cover="${projectCover("ideamap")}"
					logo="${projectLogo("ideamap")}"
					date="2024 - Present"
					name="Ideamap"
					text="A visual workspace for brainstorming where teams collaborate on ideas and use AI to boost their creativity.">
					<an-buttons slot="footer">
						<a href="https://ideamap.ai" rel="noopener" aria-label="Ideamap link">
							<an-button style="--background: #2bc28c; --foreground: var(--light);">
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
						<a href="https://andreasbm.github.io/web-skills" rel="noopener" aria-label="Web Skills link">
							<an-button style="--background: #15873D; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>

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
						<an-button style="--background: #F4426E; --foreground: var(--light);"
								   @click="${() => showYoutubeVideo({youtubeId: "9M7Aua8hc0w"})}">
							<span>Watch a product video</span>
							<an-icon .template="${videoIconTemplate}"></an-icon>
						</an-button>
						<a href="https://ideanote.io" rel="noopener" aria-label="Ideanote link">
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
						<an-button style="--background: var(--light); --foreground: #A15060;"
								   @click="${() => showYoutubeVideo({youtubeId: "DHnhU6uP9vQ"})}">
							<span>Watch a cat shooting laser</span>
							<an-icon .template="${videoIconTemplate}"></an-icon>
						</an-button>
						<a href="https://lasercat.app" rel="noopener" aria-label="Laser Cat link">
							<an-button style="--background: #8A7225; --foreground: var(--light);">
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
					date="2019 - 2023"
					name="Weightless"
					text="High quality web components with a small footprint.">
					<an-buttons slot="footer">
						<a href="https://github.com/andreasbm/weightless" rel="noopener" aria-label="Weightless link">
							<an-button style="--background: #354D8D; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>

				<!-- When to post on reddit -->
				<an-project
					class="card"
					style="--theme-600: #2a9d8f; --theme-600-contrast: var(--light);"
					cover="${projectCover("when-to-post-on-reddit")}"
					logo="${projectLogo("when-to-post-on-reddit")}"
					date="2020"
					name="When to Post on Reddit"
					text="Dive into the analysis and learn when it is the best time to post on Reddit.">
					<an-buttons slot="footer">
						<a href="https://andreasbm.github.io/when-to-post-on-reddit" rel="noopener"
						   aria-label="When to Post on Reddit link">
							<an-button style="--background: #2a9d8f; --foreground: var(--light);">
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
						<a href="https://twitter.com/pic_palette" rel="noopener"
						   aria-label="Picture Palette Twitter bot link">
							<an-button style="--background: #82535C; --foreground: var(--light);">
								<span>Twitter Bot</span>
								<an-icon .template="${twitterIconTemplate}"></an-icon>
							</an-button>
						</a>
						<a href="https://picture-palette.web.app" rel="noopener" aria-label="Picture Palette link">
							<an-button style="--background: #000000; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>

				<!-- Game Deals -->
				<an-project
					class="card"
					style="--theme-600: #00022E; --theme-600-contrast: var(--light);"
					cover="${projectCover("game-deals")}"
					logo="${projectLogo("game-deals")}"
					date="2020"
					name="Game Deals"
					text="A curation of free and discounted games.">
					<an-buttons slot="footer">
						<a href="https://andreasbm.github.io/game-deals" rel="noopener" aria-label="Game Deals">
							<an-button style="--background: #00022E; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>

				<!-- Recap Reddit -->
				<!--<an-project
					class="card"
					style="--theme-600: #BF3707; --theme-600-contrast: var(--light);"
					cover="$ {projectCover("recapreddit")}"
					logo="$ {projectLogo("recapreddit")}"
					date="2020"
					name="Recap Reddit"
					text="Automatically turn Reddit posts into recap videos.">
					<an-buttons slot="footer">
						<an-button style="--background: #1A1A1C; --foreground: var(--light);"
								   @click="$ {() => showRecapRedditVideo({post: "https://www.reddit.com/r/AskReddit/comments/a72nr4/whats_something_small_you_can_start_doing_today"})}">
							<span>Watch a Recap video</span>
							<an-icon .template="$ {videoIconTemplate}"></an-icon>
						</an-button>
						<a href="https://recap-reddit.web.app" rel="noopener" aria-label="Recap Reddit link">
							<an-button style="--background: #FF4300; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="$ {arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>-->

				<!-- Perfect Playlist -->
				<!-- <an-project
					class="card"
					style="--theme-600: #1DB954; --theme-600-contrast: var(--light);"
					cover="$ {projectCover("perfectplaylist")}"
					logo="$ {projectLogo("perfectplaylist")}"
					date="2019"
					name="Perfect Playlist"
					text="Create the perfect playlist based on you and your friends favorite music.">
					<an-buttons slot="footer">
						<a href="https://perfectplaylist.app" rel="noopener" aria-label="Perfect Playlist link">
							<an-button style="--background: #1DB954; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="$ {arrowRightIconTemplate}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>-->

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
						<an-button style="--background: #00C9EA; --foreground: var(--light);"
								   @click="${() => showYoutubeVideo({youtubeId: "7zxtR0segS8"})}">
							<span>Watch an epic battle</span>
							<an-icon .template="${videoIconTemplate}"></an-icon>
						</an-button>
						<a href="https://wordbaseapp.com" rel="noopener" aria-label="Wordbase link">
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
						<an-button style="--background: var(--light); --foreground: #151515;"
								   @click="${() => showYoutubeVideo({youtubeId: "JjydF2u0mnY"})}">
							<span>Watch my favorite recording</span>
							<an-icon .template="${videoIconTemplate}"></an-icon>
						</an-button>
						<a href="https://www.youtube.com/user/ruandpiano" rel="noopener" aria-label="Ruandpiano link">
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
					<an-section-header center headline="My favorite music"
									   text="I listen to music every day - try to listen to some of my favorite tunes. I hope you like them as much as I do!"></an-section-header>
					<div class="media-grid">
						<a aria-label="Prep link"
						   href="https://open.spotify.com/playlist/2CTXQsLLL6UiquApb3rf5F?si=gqYvx2McR1OiFvA4Wp4N-w"
						   rel="noopener">
							<an-media src="${mediaCover("prep")}"></an-media>
						</a>
						<a aria-label="Deluxe link"
						   href="https://open.spotify.com/playlist/3lrUwE6yLty0NxTR5RDH9b?si=gXX5nWtqQfCGig99zpZv1A"
						   rel="noopener">
							<an-media src="${mediaCover("deluxe")}"></an-media>
						</a>
						<a aria-label="Bastille link"
						   href="https://open.spotify.com/playlist/4SW2xyUZlNev7RQdq800Ty?si=uuGqMZKcTcqNLxzScWgTbg"
						   rel="noopener">
							<an-media src="${mediaCover("bastille")}"></an-media>
						</a>
						<a aria-label="Two Door Cinema Club link"
						   href="https://open.spotify.com/playlist/6Ig3Hmv4EZmWQcwIsH6bP3?si=ErlfCQj_TF2we5HDEPZyfQ"
						   rel="noopener">
							<an-media src="${mediaCover("two-door-cinema-club")}"></an-media>
						</a>
					</div>
				</an-card>

				<!-- Books -->
				<an-card class="card" id="books-card">
					<an-section-header center headline="My favorite books"
									   text="I find reading books to be a great way to relax. If you have time, check out some of my favorites."></an-section-header>
					<div class="media-grid">
						<a aria-label="Refactoring UI link" href="https://refactoringui.com/" rel="noopener">
							<an-media src="${mediaCover("refactoring-ui")}"
									  .iconTemplate="${openIconTemplate}"></an-media>
						</a>
						<a aria-label="Badass link"
						   href="https://www.amazon.com/Badass-Making-Awesome-Kathy-Sierra/dp/1491919019"
						   rel="noopener">
							<an-media src="${mediaCover("badass")}" .iconTemplate="${openIconTemplate}"></an-media>
						</a>
						<a aria-label="Non-Designer's Design Book link"
						   href="https://www.amazon.com/Non-Designers-Design-Book-4th/dp/0133966151" rel="noopener">
							<an-media src="${mediaCover("non-designers-design-book")}"
									  .iconTemplate="${openIconTemplate}"></an-media>
						</a>
						<a aria-label="Hooked link"
						   href="https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products-ebook/dp/B00LMGLXTS"
						   rel="noopener">
							<an-media src="${mediaCover("hooked")}" .iconTemplate="${openIconTemplate}"></an-media>
						</a>
					</div>
				</an-card>

				<!-- Podcasts -->
				<an-card class="card" id="podcast-card">
					<an-section-header center headline="My favorite podcasts"
									   text="Every day when I bike through Copenhagen I enjoy listening to podcasts. Here are some of my favorites!"></an-section-header>
					<div class="media-grid">
						<a aria-label="Darknet Diaries link"
						   href="https://open.spotify.com/show/4XPl3uEEL9hvqMkoZrzbx5?si=zc5dOe4NQM2-Gc2YHNsFyQ"
						   rel="noopener">
							<an-media src="${mediaCover("darknet")}"></an-media>
						</a>
						<a aria-label="Reply All link"
						   href="https://open.spotify.com/show/7gozmLqbcbr6PScMjc0Zl4?si=BEO9nQ8aQCaHzzxNlNqNQQ"
						   rel="noopener">
							<an-media src="${mediaCover("reply-all")}"></an-media>
						</a>
						<a aria-label="Invisible link"
						   href="https://open.spotify.com/show/2VRS1IJCTn2Nlkg33ZVfkM?si=GwXze2vySPqdmt5AaBBNJg"
						   rel="noopener">
							<an-media src="${mediaCover("invisible")}"></an-media>
						</a>
						<a aria-label="Syntax link"
						   href="https://open.spotify.com/show/4kYCRYJ3yK5DQbP5tbfZby?si=bWrUaPmBR1Kio2VIXF3prA"
						   rel="noopener">
							<an-media src="${mediaCover("syntax")}"></an-media>
						</a>
					</div>
				</an-card>

				<!-- Coffee -->
				<an-card id="coffee-card" class="card">
					<an-section-header center headline="Wanna share a cup of coffee?"
									   text="Running free services gets expensive in the long run. If you like my projects it would absolutely make my day if you support me with a cup of coffee."></an-section-header>
					<a href="${COFFEE_LINK}" rel="noopener" aria-label="Coffee link">
						<an-button id="coffee-button" @mouseenter="${() => this.startParty()}"
								   @mouseleave="${() => this.stopParty()}">
							<an-coffee-cup></an-coffee-cup>
							<span>Support me with a cup of coffee</span>
						</an-button>
					</a>
				</an-card>

				<!-- Social -->
				<an-card class="card">
					<an-section-header center headline="Say hi"
									   text="If you want to learn more about what I'm doing, find me on my favorite platforms."></an-section-header>
					<an-say-hi-buttons></an-say-hi-buttons>
				</an-card>

			</an-container>

			<!-- Footer -->
			<an-footer></an-footer>

			<!-- Coffee button -->
			<an-coffee-button id="coffee-fab-button" href="${COFFEE_LINK}"
							  message="Running free services gets expensive in the long run. If you like my projects it would absolutely make my day if you support me with a cup of coffee."
							  @mouseenter="${() => this.startParty()}"
							  @mouseleave="${() => this.stopParty()}"></an-coffee-button>
		`;
	}
}

customElements.define("an-app", App);