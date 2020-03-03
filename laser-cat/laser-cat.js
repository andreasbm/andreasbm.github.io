import "./eye.js";
import {getAngleBetweenPoints, getCenter, getLengthBetweenPoints, promisifyAnimation, TOP_Z_INDEX} from "./util.js";
import {Character, sharedCharacterStyles} from "./character.js";

/**
 * Creates an explosion element.
 * @param {*} targetCenter
 */
function createExplosionElement (targetCenter) {
	const $explosion = document.createElement("div");
	const explosionSize = 30;
	const borderWidth = 3;
	$explosion.classList.add("explosion");
	Object.assign($explosion.style, {
		height: `${explosionSize}px`,
		width: `${explosionSize}px`,
		borderRadius: `100%`,
		position: `fixed`,
		left: `${targetCenter.x - borderWidth - (explosionSize / 2)}px`,
		top: `${targetCenter.y - borderWidth - (explosionSize / 2)}px`,
		zIndex: TOP_Z_INDEX,
		pointerEvents: `none`,
		transformOrigin: `center`,
		boxSizing: "content-box",
		border: `${borderWidth}px solid violet`,
	});

	return $explosion;
}

/**
 * Creates a laser element.
 * @param {*} eyeCenter
 * @param {*} targetCenter
 */
function createLaserElement (eyeCenter, targetCenter) {
	const $laser = document.createElement("div");
	$laser.classList.add("laser");
	const height = 4;
	Object.assign($laser.style, {
		width: `${getLengthBetweenPoints(eyeCenter, targetCenter)}px`,
		height: `${height}px`,
		borderRadius: `4px`,
		background: `linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)`,
		position: `fixed`,
		left: `${eyeCenter.x - (height / 2)}px`,
		top: `${eyeCenter.y - (height / 2)}px`,
		zIndex: TOP_Z_INDEX,
		pointerEvents: `none`,
		transformOrigin: `0 center`,
		// Set the rotation to be the angle between the eye and the target.
		// For some reason we need to add 0.1deg, look into this magic number in the future.
		transform: `rotate(${getAngleBetweenPoints(eyeCenter, targetCenter) + (0.1)}deg)`,
	});

	return $laser;
}

/** Template for the laser cat */
const template = document.createElement("template");
template.innerHTML = `
	<style>
		${sharedCharacterStyles}

		#cat {
			width: 170px;
		}

		#head-mask, #body-background, #tail, #right-ear-outer, #left-ear-outer {
			fill: var(--cat-bg, #FFE07B);	
		}

		#right-ear-inner, #left-ear-inner {
			fill: var(--cat-ear-bg, #FD9BAF);	
		}

		#right-mark-1, #right-mark-2, #left-mark-1, #left-mark-2, #head-right-mark-1, #head-right-mark-2, #head-left-mark-1, #head-left-mark-2, #head-right-mark-1, #head-top-mark-1, #head-top-mark-2, #head-top-mark-3 {
			fill: var(--cat-mark-bg, #E9B312);
		}

		#body-spot {
			fill: var(--cat-spot-bg, #FFF);
		}

		#head-face-mouth-open {
			display: none;
		}

		#tail {
			transform: rotate(0deg);
			transform-origin: 0 bottom;
			animation: tail-sweep 4000ms ease infinite;
		}

		@keyframes tail-sweep {
			0% {
				transform: rotate(2deg);	
			}
			50% {
				transform: rotate(-1deg);		
			}
			100% {
				transform: rotate(2deg);	
			}
		}
	</style>
	<laser-cat-eye class="eye left"></laser-cat-eye>
	<laser-cat-eye class="eye right"></laser-cat-eye>

	<svg id="cat" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" width="100%" height="100%" version="1" viewBox="0 0 452 452">
		<defs>
			<path id="path-1" d="M76.9517444,0 C21.9965049,28.4147164 -3.52394039,67.5207541 0.390408567,117.318113 C4.49824923,169.577025 33.1997778,177.80545 67.9807024,178.032627 C70.1832103,183.921742 73.6391871,190.438775 81.010929,190.052121 C88.3826709,189.665467 91.6145092,181.792231 92.4330241,177.37005 C98.4076229,177.117161 104.432067,176.86938 110.425743,176.783581 C111.27531,179.126199 113.242934,191.316166 122.871559,190.525678 C132.449494,189.665467 133.789914,180.772421 136.151201,175.909318 C174.293654,173.486425 201.013443,163.049574 205.529523,121.984174 C209.164647,88.929435 191.734781,50.3814846 153.239926,6.34032327 L76.9517444,0 Z"/>
			<path id="path-3" d="M186.086704,0.944631673 C352.20294,-12.6485697 387.111219,123.827455 377.552579,193.729291 C367.99394,263.631128 244.808603,271 140.263849,271 C35.7190955,271 -7.84739788,195.304803 1.14979981,155.115132 C10.1469975,114.925462 19.9704685,14.537833 186.086704,0.944631673 Z"/>
		</defs>
		<g id="cat" fill="none" fill-rule="evenodd">
			<path id="tail" fill="#FFE07B" fill-rule="nonzero" stroke="#000" stroke-width="4" d="M314.748337,409.644127 C324.171345,411.329208 336.444108,407.030068 351.566626,396.746707 C374.250402,381.321665 377,355.606314 377,346.804736 C377,338.003158 370.366348,324.537628 362.851007,320.683138 C355.335667,316.828648 345.422698,318.894655 342.371542,334.273988 C339.320386,349.653321 351.566626,358.661005 345.630553,372.478131 C341.673172,381.689548 330.129654,389.779073 311,396.746707"/>
			<g id="body" transform="translate(124.000000, 257.000000)">
				<mask id="mask-2" fill="#fff">
					<use xlink:href="#path-1"/>
				</mask>
				<g id="body-background" fill="#FFE07B" fill-rule="nonzero">
					<use xlink:href="#path-1"/>
					<path fill-rule="evenodd" stroke="#000" stroke-width="4" d="M137.483548,177.825743 C137.4094,178.002693 137.332278,178.191205 137.251122,178.393494 C137.142913,178.663215 137.0317,178.946516 136.880365,179.336498 C136.785179,179.582055 136.785179,179.582055 136.688203,179.832521 C136.59024,180.085284 136.549215,180.19091 136.490112,180.342333 C136.157334,181.194922 135.894141,181.842172 135.613981,182.483508 C132.968391,188.539745 129.386966,191.948568 123.035204,192.518972 C117.292196,192.99046 113.373444,189.785042 110.857593,184.315931 C110.240495,182.974447 109.74664,181.591009 109.279389,180.012269 C109.227246,179.836092 109.084119,179.326978 108.937102,178.807947 C104.797253,178.883022 100.750688,179.023914 94.057894,179.303472 C92.3511564,186.095594 87.8986276,191.693605 81.1156867,192.049376 C74.0781763,192.418499 69.8630094,188.08769 66.6068683,180.019392 C46.5289967,179.760067 32.4818337,176.662702 21.5188499,168.813434 C8.1180819,159.218763 0.381861881,142.731364 -1.60344109,117.474841 C-5.58563614,66.8143609 20.406723,26.9851899 76.033164,-1.77657256 L76.5441362,-2.04077179 L154.212743,4.41427886 L154.745776,5.02411133 C193.573313,49.4458861 211.225519,88.4855639 207.517537,122.202802 C205.288682,142.470127 197.668099,156.322371 184.5632,165.099416 C173.345803,172.612301 158.39573,176.393544 137.483548,177.825743 Z"/>
				</g>
				<g id="body-mark" fill="#E9B312" fill-rule="nonzero" stroke="#000" mask="url(#mask-2)">
					<g transform="translate(-7.000000, 77.000000)">
						<path id="right-mark-1" d="M208.311756,0.00263473676 C199.281031,2.2289137 194.765669,4.82856891 194.765669,7.80160038 C194.765669,10.7746318 200.738232,13.4189397 212.683359,15.734524 L208.311756,0.00263473676 Z"/>
						<path id="left-mark-1" d="M17.5460878,7 C8.5153626,9.22627896 4,11.8259342 4,14.7989656 C4,17.7719971 9.97256355,20.416305 21.9176907,22.7318892 L17.5460878,7 Z" transform="translate(12.958845, 14.865945) scale(-1, 1) translate(-12.958845, -14.865945)"/>
						<path id="left-mark-2" d="M16.1902707,33.2851954 C7.1595455,35.5114743 2.6441829,38.1111295 2.6441829,41.084161 C2.6441829,44.0571925 8.61674645,46.7015003 20.5618735,49.0170846 L16.1902707,33.2851954 Z" transform="translate(11.603028, 41.151140) scale(-1, 1) rotate(28.000000) translate(-11.603028, -41.151140)"/>
						<path id="right-mark-2" d="M212.538321,28.3834487 C203.507596,30.6097277 198.992233,33.2093829 198.992233,36.1824144 C198.992233,39.1554458 204.964797,41.7997537 216.909924,44.1153379 L212.538321,28.3834487 Z" transform="translate(207.951079, 36.249393) rotate(18.000000) translate(-207.951079, -36.249393)"/>
					</g>
				</g>
				<path id="body-spot" fill="#FFF" fill-rule="nonzero" d="M127.551066,176.005442 C122.356155,168.618281 124.964474,158.384892 127.551066,148.966262 C130.137659,139.547633 142.831871,127.256229 136.622065,112.00113 C130.412258,96.7460309 124.964474,90.8271386 100.713948,92.383874 C76.4634216,93.9406093 74.2260405,99.5345022 69.0914702,112.00113 C63.9568999,124.467757 75.3555216,135.79337 77.4096299,148.966262 C79.4637382,162.139155 79.1574692,167.732114 75.9213344,176.005442 C73.7639112,181.520994 63.6871275,190.884591 45.6909835,204.096235 L164.91991,204.096235 C143.470622,190.293813 131.014341,180.930215 127.551066,176.005442 Z" mask="url(#mask-2)"/>
			</g>
			<g id="foot" fill-rule="nonzero" stroke="#000" stroke-width="4" transform="translate(185.000000, 412.000000)">
				<path id="foot-right" d="M80.5934974,3.75958781 C80.5934974,26.0541601 75.3776592,37.2014462 64.9459827,37.2014462 C54.5143062,37.2014462 48.1989786,25.1342975 46,1" transform="translate(63.296749, 19.100723) scale(-1, 1) translate(-63.296749, -19.100723)"/>
				<path id="foot-left" d="M35.2515375,3.42924712 C35.2515375,25.7238194 30.0356993,36.8711055 19.6040228,36.8711055 C9.17234628,36.8711055 2.85701872,24.8039568 0.658040092,0.66965931"/>
			</g>
			<g id="head-container" transform="translate(12.000000, 10.000000)">
				<g id="head">
					<g id="right-ear" fill-rule="nonzero" stroke="#000" stroke-width="4" transform="translate(290.000000, 0.000000)">
						<path id="right-ear-outer" fill="#FFE07B" d="M95.3847615,126.407982 C101.759184,58.6906357 96.7335322,18.3181322 80.3078062,5.29047177 C63.8820803,-7.73718864 37.408536,6.9363553 0.887173401,49.3111036 L95.3847615,126.407982 Z"/>
						<path id="right-ear-inner" fill="#FD9BAF" d="M81.779776,106.653086 C86.3485495,55.293967 82.4020133,26.54217 69.9401675,20.3976953 C57.4783216,14.2532206 38.4641427,29.8028202 12.8976308,67.046494 L81.779776,106.653086 Z"/>
					</g>
					<g id="left-ear" fill-rule="nonzero" stroke="#000" stroke-width="4" transform="translate(89.500000, 73.500000) scale(-1, 1) translate(-89.500000, -73.500000) translate(40.000000, 10.000000)">
						<path id="left-ear-outer" fill="#FFE07B" d="M95.3847615,126.407982 C101.759184,58.6906357 96.7335322,18.3181322 80.3078062,5.29047177 C63.8820803,-7.73718864 37.408536,6.9363553 0.887173401,49.3111036 L95.3847615,126.407982 Z"/>
						<path id="left-ear-inner" fill="#FD9BAF" d="M81.779776,106.653086 C86.3485495,55.293967 82.4020133,26.54217 69.9401675,20.3976953 C57.4783216,14.2532206 38.4641427,29.8028202 12.8976308,67.046494 L81.779776,106.653086 Z"/>
					</g>
					<g id="head-group" transform="translate(26.000000, 42.000000)">
						<mask id="mask-4" fill="#fff">
							<use xlink:href="#path-3"/>
						</mask>
						<g id="head-mask" fill="#FFE07B" fill-rule="nonzero">
							<use xlink:href="#path-3"/>
							<path fill-rule="evenodd" stroke="#0B0F12" stroke-width="4" d="M185.92359,-1.04870571 C262.195612,-7.29000384 316.645977,17.3314419 349.345786,64.8932393 C375.053519,102.285077 385.201231,152.557104 379.534139,194.000257 C374.972815,227.356981 345.579446,248.64531 294.985175,260.524883 C255.723449,269.743566 207.509086,273 140.263849,273 C91.7783896,273 52.724241,256.820692 26.6811598,229.508888 C4.57930745,206.330314 -5.74673969,176.766401 -0.801891536,154.67821 C-0.205071969,152.012271 2.02648704,141.202128 2.1495045,140.62128 C3.50510554,134.220572 4.74055334,128.940034 6.18468689,123.595 C10.0195827,109.401264 14.880568,96.6710193 21.546158,84.5804833 C33.5970945,62.721611 50.8518126,44.4399222 74.8020779,30.1789788 C102.917382,13.4380048 139.536754,2.74710393 185.92359,-1.04870571 Z"/>
						</g>
						<g id="head-mark" fill="#E9B312" fill-rule="nonzero" stroke="#000" mask="url(#mask-4)">
							<g transform="translate(-3.000000, -12.000000)">
								<path id="head-right-mark-1" d="M372.546088,116 C363.515363,118.226279 359,120.825934 359,123.798966 C359,126.771997 364.972564,129.416305 376.917691,131.731889 L372.546088,116 Z" transform="translate(367.958845, 123.865945) rotate(-9.000000) translate(-367.958845, -123.865945)"/>
								<path id="head-right-mark-2" d="M378.666294,142.304629 C369.635569,144.530908 365.120207,147.130564 365.120207,150.103595 C365.120207,153.076626 371.09277,155.720934 383.037897,158.036519 L378.666294,142.304629 Z" transform="translate(374.079052, 150.170574) rotate(2.000000) translate(-374.079052, -150.170574)"/>
								<path id="head-top-mark-1" d="M157.889373,8.32270267 C148.858648,10.5489816 144.343285,13.1486368 144.343285,16.1216683 C144.343285,19.0946998 150.315849,21.7390076 162.260976,24.0545919 L157.889373,8.32270267 Z" transform="translate(153.302130, 16.188647) scale(-1, 1) rotate(-80.000000) translate(-153.302130, -16.188647)"/>
								<path id="head-top-mark-2" d="M192.889373,6.32270267 C183.858648,8.54898163 179.343285,11.1486368 179.343285,14.1216683 C179.343285,17.0946998 185.315849,19.7390076 197.260976,22.0545919 L192.889373,6.32270267 Z" transform="translate(188.302130, 14.188647) scale(-1, 1) rotate(-80.000000) translate(-188.302130, -14.188647)"/>
								<path id="head-top-mark-3" d="M222.889373,3.32270267 C213.858648,5.54898163 209.343285,8.14863684 209.343285,11.1216683 C209.343285,14.0946998 215.315849,16.7390076 227.260976,19.0545919 L222.889373,3.32270267 Z" transform="translate(218.302130, 11.188647) scale(-1, 1) rotate(-101.000000) translate(-218.302130, -11.188647)"/>
								<path id="head-left-mark-1" d="M21.5460878,120 C12.5153626,122.226279 8,124.825934 8,127.798966 C8,130.771997 13.9725636,133.416305 25.9176907,135.731889 L21.5460878,120 Z" transform="translate(16.958845, 127.865945) scale(-1, 1) rotate(-9.000000) translate(-16.958845, -127.865945)"/>
								<path id="head-left-mark-1" d="M14.6662944,150.304629 C5.63556918,152.530908 1.12020658,155.130564 1.12020658,158.103595 C1.12020658,161.076626 7.09277014,163.720934 19.0378972,166.036519 L14.6662944,150.304629 Z" transform="translate(10.079052, 158.170574) scale(-1, 1) rotate(2.000000) translate(-10.079052, -158.170574)"/>
							</g>
						</g>
						<g id="head-face" fill-rule="nonzero" mask="url(#mask-4)">
							<g transform="translate(171.000000, 152.000000)">
								<path id="head-face-mouth" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34.6780145,21.8861579 C19.4862243,21.8861579 19.4862243,12 17.3390072,12 C15.1917902,12 15.1917902,21.8861579 0,21.8861579"/>
								<path id="head-face-mouth-open" fill="#000" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34.6780145,22.8112184 C19.4862243,22.8112184 31.2478404,12.9250605 17.3390072,12.9250605 C3.43017403,12.9250605 15.1917902,22.8112184 0,22.8112184 C15.1917902,22.8112184 15.1917902,31.8861579 17.3390072,31.8861579 C19.4862243,31.8861579 19.4862243,22.8112184 34.6780145,22.8112184 Z" transform="translate(17.339007, 22.405609) rotate(-180.000000) translate(-17.339007, -22.405609)"/>
								<path id="head-face-nose" fill="#000" d="M11.0004303,-8.8817842e-16 L23.294579,-4.4408921e-16 C24.3991485,-6.46995335e-16 25.294579,0.8954305 25.294579,2 C25.294579,2.31384271 25.2207198,2.62328057 25.0789743,2.9032903 L19.9678536,13 L14.3271557,13 L9.216035,2.9032903 C8.71716154,1.91779598 9.1116457,0.714478141 10.09714,0.215604685 C10.3771497,0.0738591473 10.6865876,-1.27461566e-15 11.0004303,-1.33226763e-15 Z"/>
							</g>
						</g>
					</g>
					<g id="whisker" fill="#000" transform="translate(0.000000, 203.000000)">
						<g id="whisker-right" transform="translate(383.000000, 0.000000)">
							<path id="whisker-right-2" d="M10.926,21.242 C3.235,22.712 0.587,24.195 1.616,26.453 C2.156,27.639 3.066,27.58 7.811,26.055 C18.059,22.761 29.934,25.633 38.153,33.393 C39.832,34.98 42.097,34.564 42.097,32.669 C42.097,30.236 32.211,23.649 25.807,21.815 C22.331,20.819 14.678,20.525 10.926,21.242"/>
							<path id="whisker-right-1" d="M21.636,1.232 C12.549,2.553 -0.909,10.596 0.279,13.995 C0.941,15.887 2.247,15.576 5.879,12.662 C15.486,4.954 25.972,2.856 39.153,6.005 C42.597,6.828 43.753,6.736 44.046,5.617 C44.453,4.059 43.934,3.419 41.777,2.82 C40.635,2.504 39.455,2.163 39.155,2.064 C36.06,1.043 26.168,0.573 21.636,1.232"/>
						</g>
						<g id="whisker-left" transform="translate(0.000000, 12.000000)">
							<path id="path0-path" d="M8.724,1.576 C2.75,2.85 1.01,3.573 0.863,4.843 C0.584,7.249 1.678,7.364 8.171,5.608 C19.804,2.463 31.751,5.079 40.12,12.604 C44.254,16.32 46.544,13.625 42.517,9.784 C34.096,1.751 21.846,-1.224 8.724,1.576"/>
							<path id="path0-path" d="M21.52,19.126 C14.757,20.169 4.115,26.435 4.115,29.374 C4.115,31.833 6.04,31.874 8.845,29.475 C17.355,22.198 28.275,20.716 39.186,25.359 C42.252,26.664 42.857,26.716 43.733,25.748 C46.797,22.362 31.026,17.66 21.52,19.126"/>
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
`;

export default class LaserCat extends Character {

	/**
	 * Hooks up the element
	 */
	connectedCallback () {
		super.connectedCallback(template);
		this.shootCount = 0;

		// Get references to the relevant DOM elements.
		this.$mouth = this.shadowRoot.querySelector("#head-face-mouth-open");
	}

	/**
	 * Sets the colors of the cat.
	 * If no colors are provided the color will default.
	 * @param {*} colors
	 */
	setColors (colors = {}) {
		super.setColors(colors);
		const {bg, mark, ear, spot} = colors;
		this.style.setProperty(`--cat-bg`, bg || "#FFE07B");
		this.style.setProperty(`--cat-mark-bg`, mark || "#E9B312");
		this.style.setProperty(`--cat-ear-bg`, ear || "#FD9BAF");
		this.style.setProperty(`--cat-spot-bg`, spot || "#FFF");
	}

	/**
	 * Sets dark theme.
	 */
	setDarkColors () {
		super.setDarkColors();
		this.setColors({
			bg: "#A9A9A9",
			mark: "#6A6868",
			ear: "#DEDCDC",
			spot: "#DEDCDC"
		});
	}

	/**
	 * Handles that a target was clicked.
	 * @param {*} e
	 * @param {*} $target
	 */
	handleDidClickTarget (e, $target) {
		super.handleDidClickTarget(e, $target);
		this.shootLaserAtElement($target, {
			x: e.clientX,
			y: e.clientY
		});
	}

	/**
	 * Shoot laser at target
	 * @param {*} $target
	 * @param {*} mousePosition
	 */
	shootLaserAtElement ($target, mousePosition) {

		// Find centers
		const targetCenter = mousePosition || getCenter($target);

		// Add laser for each eye
		for (const $eye of this.eyes) {
			const eyeCenter = getCenter($eye);

			// Spawn the laser
			this.spawnLaser(eyeCenter, targetCenter).then(() => {
				if ($target.isConnected) {
					$target.remove();
				}
			});

			// Flash the eye
			$eye.flash();
		}

		// Add explosion
		this.spawnExplosion(targetCenter);

		// Plays laser sounds
		this.playLaserSound();

		// Increment the shoot count
		this.shootCount += 1;

		// Add one more point
		this.addPoints(1);

		// Every fifth time a shot has been fired
		// theres a 30% chance that a rainbow will spawn.
		if (this.shootCount % 5 === 0) {
			if (Math.random() > 0.7) {
				this.spawnRainbow();
				if (!this.muted) {
					this.soundbox.play("rainbow", 0.4);
				}
			}
		}
	}

	/**
	 * Play laser sounds and move the mouth.
	 */
	playLaserSound () {

		// Play sounds
		if (!this.muted) {
			this.soundbox.play("meow", 0.4);
			this.soundbox.play("laser", 0.4);
		}

		// Open mouth
		requestAnimationFrame(() => {
			this.$mouth.style.display = `block`;
			setTimeout(() => {
				this.$mouth.style.display = `none`;
			}, 800);
		});
	}

	/**
	 * Removes a target.
	 * @param {*} $target
	 */
	removeTarget ($target) {
		const randomX = (Math.random() * 20) - 10; /* Between -10 and +10 */
		const randomY = (Math.random() * 20) - 10; /* Between -10 and +10 */
		const randomRotation = (Math.random() * 20) - 10; /* Between -10 and +10) */
		const randomDuration = (Math.random() * 100) + 100; /* Between 100 and 200 */

		promisifyAnimation($target.animate({
			transform: [`translate(0, 0) rotate(0)`, `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`],
			opacity: [1, 0]
		}, {
			duration: randomDuration,
			easing: "ease-out",
			fill: "both"
		})).then(() => {
			$target.remove();
		});
	}

	/**
	 * Spawns a laser! How cool is that! :-)
	 * @param {*} eyeCenter
	 * @param {*} targetCenter
	 */
	async spawnLaser (eyeCenter, targetCenter) {

		// Append the laser
		const $laser = createLaserElement(eyeCenter, targetCenter);
		document.body.appendChild($laser);

		// Animate the laser in!
		await promisifyAnimation($laser.animate({
			opacity: [0, 1]
		}, {
			easing: "ease-in",
			duration: 50,
			fill: "both"
		}));

		setTimeout(async () => {

			// Animate the laser out
			await promisifyAnimation($laser.animate({
				opacity: [1, 0]
			}, {
				easing: "ease-out",
				duration: 30,
				fill: "both"
			}));

			// Remove laser
			if ($laser.isConnected) {
				$laser.remove();
			}
		}, 100);
	}

	/**
	 * Spawns an explosion.
	 * @param {*} targetCenter
	 */
	async spawnExplosion (targetCenter) {

		// Append the explosion
		const $explosion = createExplosionElement(targetCenter);
		document.body.appendChild($explosion);

		// Animate the explosion in!
		await promisifyAnimation($explosion.animate({
			opacity: [0, 1, 0],
			transform: [`scale(0)`, `scale(1)`],
			background: [`violet`, `violet`, `transparent`]
		}, {
			easing: "ease-out",
			duration: 300,
			fill: "both"
		}));

		// Add small lines for dramatic effect
		if ($explosion.isConnected) {
			$explosion.remove();
		}
	}

	/**
	 * Spawns a rainbow!
	 */
	async spawnRainbow () {

		// Import the element and create an instance of it
		await import("./rainbow.js");
		const $rainbow = document.createElement("laser-cat-rainbow");

		// Make sure the rainbow appears over the cute cat
		$rainbow.style.left = this.style.left;

		// Remove the rainbow after the animation has finished
		$rainbow.addEventListener("transitionend", () => {
			if ($rainbow.isConnected) {
				$rainbow.remove();
			}
		})

		// Append the rainbow and show it
		document.body.appendChild($rainbow);
		requestAnimationFrame(() => {
			$rainbow.show = true;
		});
	}
}

customElements.define("laser-cat", LaserCat);