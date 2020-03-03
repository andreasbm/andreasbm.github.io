export const TOP_Z_INDEX = `9999999999`;

/**
 * Returns the center of an element.
 * @param {*} $elem
 */
export function getCenter ($elem) {
	const rect = $elem.getBoundingClientRect();
	return {
		x: rect.left + (rect.width / 2),
		y: rect.top + (rect.height / 2),
	};
}

/**
 * Returns length between points
 * @param {*} pointA
 * @param {*} pointB
 */
export function getLengthBetweenPoints (pointA, pointB) {
	// sqrt((x2 - x1)^2 + (y2 - y1)^2))
	return Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
}

/**
 * Converts radian to degrees.
 * @param {*} rad
 */
export function radianToDegrees (rad) {
	return rad * (180 / Math.PI);
}

/**
 * Returns angle between points in rad.
 * @param {*} pointA
 * @param {*} pointB
 */
export function getAngleBetweenPoints (pointA, pointB) {
	const dX = pointB.x - pointA.x;
	const dY = pointB.y - pointA.y;
	const rad = Math.atan2(dY, dX);
	return radianToDegrees(rad);
}

/**
 * Turns an animation into a promise.
 * @param {*} animation
 */
export function promisifyAnimation (animation) {
	return new Promise(res => {
		animation.onfinish = res;
		animation.oncancel = res;
	});
}

/**
 * Returns the default blacklisted targets.
 */
export function getDefaultBlacklistedTargets () {
	return [
		...Array.from(document.querySelectorAll("laser-cat-app")),
		...Array.from(document.querySelectorAll("laser-cat")),
		...Array.from(document.querySelectorAll("laser-cat-rainbow")),
		document.documentElement,
		document,
		document.body,
		document.head
	];
}

/**
 * Returns the default blacklisted tagnames.
 */
export function getDefaultBlacklistedTagNames () {
	return [
		"STYLE",
		"SCRIPT",
		"LASER-CAT-APP",
		"LASER-CAT",
		"ANGRY-ALIEN",
		"HUNGRY-FROG"
	];
}

/**
 * Stops the event.
 * @param {*} e
 */
export function stopEvent (e) {
	e.preventDefault();
	e.stopPropagation();
	e.stopImmediatePropagation();
}