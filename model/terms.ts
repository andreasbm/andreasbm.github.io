export type TermKind = "title" | "subtitle" | "body";

export interface TermEntry {
    kind: TermKind;
    text: string;
}

