/** A real soundbox */
export class Soundbox {
	constructor (sounds) {
		this.sounds = sounds;
		this.preparedSounds = null;
	}

	/** Prepares the sounds */
	prepare (sounds) {
		sounds = sounds || {};
		this.preparedSounds = {};

		for (const [id, srcs] of Object.entries(sounds)) {
			for (const src of srcs) {
				this.prepareSound(id, src);
			}
		}
	}

	/** Prepares a sound */
	prepareSound (id, src) {
		const $audio = new Audio();
		const $source = document.createElement("source");
		$source.type = "audio/mpeg";
		$source.src = src;
		$audio.appendChild($source);

		// Add it to the list
		const prepared = this.preparedSounds[id] || [];
		prepared.push($audio);
		this.preparedSounds[id] = prepared;
	}

	/**
	 * Stops a sound with an ID.
	 * @param {*} id
	 */
	stop (id) {
		if (this.preparedSounds == null) {
			return;
		}

		const prepared = this.preparedSounds[id] || [];
		for (const $audio of prepared) {
			$audio.pause();
			$audio.currentTime = 0;
		}
	}

	/** Plays a sound with an id */
	/**
	 * Plays a sound with an ID:
	 * @param {*} id
	 * @param {*} volume
	 */
	play (id, volume = 1) {

		// Prepare the sounds just in time to avoid loading the sounds before we use them
		if (this.preparedSounds == null) {
			this.prepare(this.sounds);
		}

		// Play the sound
		const prepared = this.preparedSounds[id];
		if (prepared != null && prepared.length > 0) {
			const index = Math.round((Math.random() * (prepared.length - 1)));
			const $audio = prepared[index];

			// Reset the audio
			$audio.pause();
			$audio.currentTime = 0;

			// Set config
			$audio.volume = volume;

			// Play it!
			$audio.play();

			return $audio;
		}

		return null;
	}
}