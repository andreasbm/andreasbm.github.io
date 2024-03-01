import {html, render} from "lit";

export async function showIframe ({href}) {
	import("web-dialog").then(({openDialog}) => {
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
					src="${href}"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			  `, $dialog)
		});
	});
}