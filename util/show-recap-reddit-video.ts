import {showIframe} from "./show-iframe";

export async function showRecapRedditVideo ({post}: {post: string}) {

	(window as any).gtag("event", "watch_recap_reddit", {
		"event_category": "cta",
		"event_label": `Watch Recap Reddit video of '${post}'`,
	});

	await showIframe({
		href: `https://recap-reddit.web.app?post=${post}`
	});
}