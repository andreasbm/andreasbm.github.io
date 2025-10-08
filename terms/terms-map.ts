import { ProjectId } from "../model/project";
import { TermEntry } from "../model/terms";
import { jlptTerms } from "./jlpt-terms";

export const termsMap: Partial<Record<ProjectId, TermEntry[]>> = {
    "jlptdrills": jlptTerms
}