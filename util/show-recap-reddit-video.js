import {showIframe} from "./show-iframe.js";

export async function showRecapRedditVideo ({post}) {

	gtag("event", "watch_recap_reddit", {
		"event_category": "cta",
		"event_label": `Watch Recap Reddit video of '${post}'`,
	});

	await showIframe({
		href: `https://recap-reddit.web.app?post=${post}`
	});
}