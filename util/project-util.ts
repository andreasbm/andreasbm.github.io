const ASSETS_BASE_PATH = `/assets`;
const PROJECT_ASSETS_BASE_PATH = `${ASSETS_BASE_PATH}/projects`;

export function projectPath (id: string, extra: string) {
    return `${PROJECT_ASSETS_BASE_PATH}/${id}${extra != null ? `/${extra}` : ""}`;
}

export function projectCover (id: string) {
    return projectPath(id, "cover.jpg");
}

export function projectLogo (id: string) {
    return projectPath(id, "logo.svg");
}

export function mediaCover (id: string) {
    return `${ASSETS_BASE_PATH}/media/${id}.jpg`;
}
