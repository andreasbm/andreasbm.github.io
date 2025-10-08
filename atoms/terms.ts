import { LitElement, html, css, PropertyValues } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { when } from "lit/directives/when.js";
import { state } from "lit/decorators/state.js";
import {sharedStyles} from "../styles/shared";
import { jlptTerms } from "../terms/jlpt-terms";
import { TermEntry } from "../model/terms";
import { projectLogo } from "../util/project-util";
import { ProjectId } from "../model/project";
import { property } from "lit/decorators/property.js";
import { termsMap } from "../terms/terms-map";

class Terms extends LitElement {
	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
				
				}
                
                #logo {
                    width: 100px;
                    margin: 0 auto var(--spacing-l);
                }
                
                #subtitle {
                    font-weight: var(--font-weight-b);
                }
                
                #subtitle, #text {
                    font-size: var(--font-size-m);
                }
                
			`
		];
	}

    @property() project?: ProjectId;
    @state() private terms: TermEntry[] = [];

    protected firstUpdated(props: PropertyValues) {
        super.firstUpdated(props);

        if (this.project) {
            this.terms = termsMap[this.project] || [];
        }
    }

    close () {
        this.dispatchEvent(new CustomEvent("close"));
    }

    render () {
        return html`
            ${this.project != null && this.terms.length > 0 ? html`
                <img id="logo" src="${projectLogo(this.project)}" />
                ${this.terms.map((item: TermEntry) => {
                    switch (item.kind) {
                        case "title":
                            return html`<an-text id="title" role="heading" aria-level="1" margin="large">${item.text}</at-text>`;
                        case "subtitle":
                            return html`<an-text id="subtitle" aria-level="2" margin="medium">${item.text}</an-text>`;
                        default:
                            return html`<an-text id="text" margin="large">${unsafeHTML(item.text)}</an-text>`;
                    }
                })}
            ` : html`
                <an-text margin="large">No terms to see here...</an-text>
            `}
            <an-button @click="${this.close}">Close</an-button>
        `;
	}
}

customElements.define("an-terms", Terms);