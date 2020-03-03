import {render, html} from "./../web_modules/lit-html.js";

export async function showYoutubeVideo ({youtubeId}) {

	gtag("event", "watch_video", {
		"event_category": "cta",
		"event_label": `Watch Youtube video with ID '${youtubeId}'`,
	});

	import("./../web_modules/web-dialog.js").then(({openDialog}) => {
		openDialog({
			center: true,
			$content: $dialog => render(html`
				<style>
					#video {
						width: 100%;
						height: 420px;
						outline: none;
					}
					
					#loading {
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						z-index: -1;
					}
				</style>
				<div id="loading">Loading...</div>
				<iframe
					id="video"
					src="https://www.youtube.com/embed/${youtubeId}?autoplay=1"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			  `, $dialog)
		});
	});
}