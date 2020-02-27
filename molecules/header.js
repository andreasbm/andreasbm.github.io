import {arrowDownIconTemplate, githubIconTemplate, sendIconTemplate} from "./../icons.js";
import {sharedStyles} from "./../styles/shared.js";
import {css, html, LitElement} from "./../web_modules/lit-element.js";
import "./../atoms/button.js";
import "./../atoms/icon.js";
import "./../atoms/text.js";

class Header extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				#header-container {
					position: relative;
				}

				#header {
					width: 100%;
					height: 600px;
					background: var(--space-500);
					color: var(--space-500-contrast);
					display: flex;
					align-items: center;
					overflow: hidden;
					position: relative;
				}
				
				#content {
					padding: var(--spacing-m);
					margin: 0 auto;
					text-align: center;
					max-width: var(--container-width-s);
					position: relative;
				}
				
				#sun {
					position: absolute;
					left: 50%;
					top: 40%;
					transform: translate(-50%, -50%);
					animation: rotate 50000s linear infinite;
					transform-origin: 0 0;
					width: 2000px;
					height: 2000px;
				}
				
				#sun > path {
					fill: #0B0C2B;
				}
				
				#avatar {
					animation: scale 4s ease-in-out infinite;
					margin: 0 0 var(--spacing-m);
				}
				
				#buttons {
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translate(-50%, 50%);
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
				}
				
				#buttons > :not(:last-child) {
					margin: 0 var(--spacing-xxl) 0 0;
				}
				
				#projects-button {
					background: #6D73DB;
					color: var(--light);
				}
				
				@keyframes rotate {
					0% {
						transform: rotate(0deg) translate(-50%, -50%);
					}
					100% {
						transform: rotate(360000deg) translate(-50%, -50%);
					}
				}
				
				@keyframes scale {
					0% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.05);
					}
					100% {
						transform: scale(1);;
					}
				}
				
				
				@media (max-width: 770px) {
					#buttons > :not(:nth-child(2)) {
						display: none;
					}
				}
			`
		];
	}

	render () {
		return html`
			<div id="header-container">
				<header id="header">
					<svg id="sun" preserveAspectRatio="none" viewBox="0 0 2294 2294" xmlns="http://www.w3.org/2000/svg">
						<path d="M1966.794 0c-316.537 558.384-818.016 1145.222-818.016 1145.222S1735.616 643.742 2294 327.206v312.98c-529.932 288.084-1145.222 505.036-1145.222 505.036S1721.39 1038.524 2294 1013.628v266.744c-572.61-24.896-1145.222-131.594-1145.222-131.594S1764.068 1365.73 2294 1653.814v312.98c-558.384-316.537-1145.222-818.016-1145.222-818.016s501.48 586.838 818.016 1145.222h-312.98c-288.084-529.932-505.036-1141.665-505.036-1145.222 0 0 106.698 572.611 131.594 1145.222h-263.188c24.897-572.61 131.594-1141.665 131.594-1145.222 0 0-216.952 615.29-505.035 1145.222H327.206c316.537-558.384 814.46-1145.222 818.016-1145.222 0 0-586.838 501.48-1145.222 818.016v-312.98c529.932-288.084 1141.665-505.036 1145.222-505.036 0 0-572.611 106.698-1145.222 131.594v-263.188c572.61 24.897 1141.665 131.594 1145.222 131.594 0 0-615.29-216.952-1145.222-505.035v-312.98c558.384 316.536 1145.222 814.459 1145.222 818.015 0 0-501.48-586.837-818.016-1145.221h312.98c288.084 529.931 505.036 1145.221 505.036 1145.221S1038.524 576.168 1013.628 3.557h263.187c-24.896 572.61-131.593 1145.221-131.593 1145.221s216.952-615.29 505.035-1145.221h316.537V0z" fill="#000" fill-rule="nonzero"/>
					</svg>
					<div id="content">
						<img id="avatar" src="assets/andreas.png" />
						<an-text id="title" role="heading" aria-level="1">Hi, I'm Andreas. I love building awesome things for the web.</an-text>
					</div>
				</header>
				<div id="buttons">
					<an-button id="projects-button">
						<span>See my projects</span>
						<an-icon .template="${arrowDownIconTemplate}"></an-icon>
					</an-button>
					<a href="https://github.com/andreasbm" target="_blank">
						<an-button>
							<an-icon .template="${githubIconTemplate}"></an-icon>
							<span>Go to my Github</span>
						</an-button>
					</a>
					<an-button style="background: var(--yellow-500); color: var(--yellow-500-contrast)">
						<span>Contact me</span>
						<an-icon .template="${sendIconTemplate}"></an-icon>
					</an-button>
				</div>
			</div>
		`;
	}
}

customElements.define("an-header", Header);