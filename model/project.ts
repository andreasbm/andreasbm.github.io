export const PROJECT_IDS = [
    "jlptdrills",
    "ideamap",
    "webskills",
    "ideanote",
    "lasercat",
    "weightless",
    "when-to-post-on-reddit",
    "picturepalette",
    "game-deals",
    "wordbase",
    "ruandpiano",
] as const;

export type ProjectId = typeof PROJECT_IDS[number];