import {html, render} from "lit";
import { ProjectId } from "../model/project";

export async function showTerms (id: ProjectId) {
    import("../atoms/terms");
	import("web-dialog").then(({openDialog}) => {
		openDialog({
			center: true,
			$content: $dialog => render(html`
				<style>
				
				</style>
                <div tabindex="0"></div>
                <an-terms project="${id}" @close="${() => $dialog.close()}"></an-terms>
			  `, $dialog)
		});
	});
}