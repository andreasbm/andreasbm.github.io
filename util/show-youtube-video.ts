import {showIframe} from "./show-iframe";

export async function showYoutubeVideo ({youtubeId}: {youtubeId: string}) {

	(window as any).gtag("event", "watch_video", {
		"event_category": "cta",
		"event_label": `Watch Youtube video with ID '${youtubeId}'`,
	});

	await showIframe({
		href: `https://www.youtube.com/embed/${youtubeId}?autoplay=1`
	});
}