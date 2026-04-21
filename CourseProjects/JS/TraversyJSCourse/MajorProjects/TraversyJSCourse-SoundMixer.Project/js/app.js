import { sounds, defaultPresets } from "./soundData.js";
import { SoundManager } from "./soundManager.js";
import { PresetManager } from "./presetManager.js";
import { UI } from "./ui.js";

class AmbientMixer {
	//Initialize dependencies and default state

	constructor() {
		this.soundManager = new SoundManager();
		this.ui = new UI();
		this.presetManager = new PresetManager();
		this.timer = null;
		this.currentSoundState = {};
		this.masterVolume = 100;
		this.isInitialized = false;
	}

	init() {
		try {
			// Initialize UI

			this.ui.init();

			// Render sound cards using sound data

			this.ui.renderSoundCards(sounds);

			// Setting all event listeners

			this.setupEventListeners();

			// Load all sounds

			this.loadAllSounds();

			// Initialize sound states after loading sounds

			sounds.forEach((sound) => {
				this.currentSoundState[sound.id] = 0;
			});

			this.isInitialized = true;
		} catch (error) {
			console.log("Failed to initialized app: ", error);
		}
	}

	// Setup all event listeners

	setupEventListeners() {
		// Handle all clicks with event delegation

		document.addEventListener("click", async (e) => {
			// Check if a play button was clicked

			if (e.target.closest(".play-btn")) {
				const soundId = e.target.closest(".play-btn").dataset.sound;
				await this.toggleSound(soundId);
			}

			// Check if a default preset button was clicked
			if (e.target.closest(".preset-btn")) {
				const presetKey = e.target.closest(".preset-btn").dataset.preset;
				this.loadPreset(presetKey);
			}
		});

		// Handle the volume slider changes

		document.addEventListener("input", (e) => {
			if (e.target.classList.contains("volume-slider")) {
				const soundId = e.target.dataset.sound;
				const volume = parseInt(e.target.value);
				this.setSoundVolume(soundId, volume);
			}
		});

		// Handle master volume slider

		const masterVolumeSlider = document.getElementById("masterVolume");
		if (masterVolumeSlider) {
			masterVolumeSlider.addEventListener("input", (e) => {
				const volume = parseInt(e.target.value);
				this.setMasterVolume(volume);
			});
		}

		// Handle master play/pause button

		if (this.ui.playPauseButton) {
			this.ui.playPauseButton.addEventListener("click", () => {
				this.toggleAllSounds();
			});
		}

		// Handle reset button

		if (this.ui.resetButton) {
			this.ui.resetButton.addEventListener("click", () => {
				this.resetAll();
			});
		}

		// Save preset button

		const saveButton = document.getElementById("savePreset");

		if (saveButton) {
			saveButton.addEventListener("click", () => {
				this.showSavePresetModal();
			});
		}

		// Cancel save preset button

		const cancelSaveButton = document.getElementById("cancelSave");

		if (cancelSaveButton) {
			cancelSaveButton.addEventListener("click", () => {
				this.ui.hideModal();
			});
		}

		// Close modal if backdrop is clicked

		if (this.ui.modal) {
			this.ui.modal.addEventListener("click", (e) => {
				if (e.target === this.ui.modal) {
					this.ui.hideModal();
				}
			});
		}

		// Confirm save preset button

		const confirmSaveButton = document.getElementById("confirmSave");

		if (confirmSaveButton) {
			confirmSaveButton.addEventListener("click", () => {
				this.saveCurrentPreset();
			});
		}
	}

	// Load all sound files

	loadAllSounds() {
		sounds.forEach((sound) => {
			const audioUrl = `audio/${sound.file}`;
			const success = this.soundManager.loadSound(sound.id, audioUrl);
			if (!success) {
				console.warn(`Could not load sound: ${sound.name} from ${audioUrl}`);
			}
		});
	}

	// Toggle sounds

	async toggleSound(soundId) {
		const audio = this.soundManager.audioElements.get(soundId);

		if (!audio) {
			console.log(`Sound ${soundId} not found.`);
			return false;
		}

		if (audio.paused) {
			// Get current slider value

			const card = document.querySelector(`[data-sound='${soundId}']`);
			const slider = card.querySelector(".volume-slider");
			let volume = parseInt(slider.value);

			// If slider at 0, default to 50%

			if (volume === 0) {
				volume = 50;
				slider.value = 50;
				this.ui.updateVolumeDisplay(soundId, volume);
			}

			// Set current sound state

			this.currentSoundState[soundId] = volume;

			// If sound is off, turn it on

			const effectiveVolume = (volume * this.masterVolume) / 100;
			this.soundManager.setVolume(soundId, effectiveVolume);
			await this.soundManager.playSound(soundId);
			this.ui.updateSoundPlayButton(soundId, true);
		} else {
			// Set current sound state

			this.currentSoundState[soundId] = 0;

			// If sound is on, turn it off

			this.soundManager.pauseSound(soundId);
			this.ui.updateSoundPlayButton(soundId, false);
		}

		// Ui changes of main play button

		this.updateMainPlayButtonState();
	}

	// Toggle all sounds

	toggleAllSounds() {
		if (this.soundManager.isPlaying) {
			// Toggle sounds to off, if on

			this.soundManager.pauseAll();
			this.ui.updateMainPlayButton(false);
			sounds.forEach((sound) => {
				this.ui.updateSoundPlayButton(sound.id, false);
			});
		} else {
			// Toggle sounds to on, if off

			for (const [soundId, audio] of this.soundManager.audioElements) {
				const card = document.querySelector(`[data-sound='${soundId}']`);
				const slider = card?.querySelector(".volume-slider");

				if (slider) {
					let volume = parseInt(slider.value);
					if (volume === 0) {
						volume = 50;
						slider.value = 50;
						this.ui.updateVolumeDisplay(soundId, volume);
					}
					this.currentSoundState[soundId] = volume;

					const effectiveVolume = (volume * this.masterVolume) / 100;
					audio.volume = effectiveVolume / 100;
					this.ui.updateSoundPlayButton(soundId, true);
				}
			}

			// Play all sounds

			this.soundManager.playAll();
			this.ui.updateMainPlayButton(true);
		}
	}

	// Set sound volume

	setSoundVolume(soundId, volume) {
		// Set sound volume in state

		this.currentSoundState[soundId] = volume;

		// Calculate effective volume

		const effectiveVolume = (volume * this.masterVolume) / 100;

		// Update the sound volume with the scaled volume

		const audio = this.soundManager.audioElements.get(soundId);
		if (audio) {
			audio.volume = effectiveVolume / 100;
		}

		// Update visual changes of volume slider

		this.ui.updateVolumeDisplay(soundId, volume);

		// Sync sounds

		this.updateMainPlayButtonState();
	}

	// Set master volume

	setMasterVolume(volume) {
		this.masterVolume = volume;

		// Update the display

		const masterVolumeValue = document.getElementById("masterVolumeValue");
		if (masterVolumeValue) {
			masterVolumeValue.textContent = `${volume}%`;
		}

		// Apply master volume to all currently playing sounds

		this.applyMasterVolumeToAll();
	}

	// Apply master volume to all playing sounds

	applyMasterVolumeToAll() {
		for (const [soundId, audio] of this.soundManager.audioElements) {
			if (!audio.paused) {
				const card = document.querySelector(`[data-sound="${soundId}"]`);
				const slider = card?.querySelector(".volume-slider");
				if (slider) {
					const individualVolume = parseInt(slider.value);

					// Calculate effective volume

					const effectiveVolume = (individualVolume * this.masterVolume) / 100;

					// Apply to actual element

					audio.volume = effectiveVolume / 100;
				}
			}
		}
	}

	// Update main play button based on individual sounds

	updateMainPlayButtonState() {
		// Check if any sound is playing

		let anySoundPlaying = false;
		for (const [soundId, audio] of this.soundManager.audioElements) {
			if (!audio.paused) {
				anySoundPlaying = true;
				break;
			}
		}

		// Update the main button and the internal state

		this.soundManager.isPlaying = anySoundPlaying;
		this.ui.updateMainPlayButton(anySoundPlaying);
	}

	// Reset all

	resetAll() {
		// Stop all sounds

		this.soundManager.stopAll();

		// Reset master volume

		this.masterVolume = 100;

		// Reset current sound state

		sounds.forEach((sound) => {
			this.currentSoundState[sound.id] = 0;
		});

		// Reset Ui

		this.ui.resetUi();
	}

	// Load preset config

	loadPreset(presetKey) {
		const preset = defaultPresets[presetKey];

		if (!preset) {
			console.error(`Preset: ${presetKey} not found`);
			return;
		}

		// Stop all sounds

		this.soundManager.stopAll();

		// Reset all volumes to 0

		sounds.forEach((sound) => {
			this.currentSoundState[sound.id] = 0;
			this.ui.updateVolumeDisplay(sound.id, 0);
			this.ui.updateSoundPlayButton(sound.id, false);
		});

		// Apply the preset volumes

		for (const [soundId, volume] of Object.entries(preset.sounds)) {
			// Set volume state

			this.currentSoundState[soundId] = volume;

			// Update UI

			this.ui.updateVolumeDisplay(soundId, volume);

			// Calculate and assign effective volume

			const effectiveVolume = (volume * this.masterVolume) / 100;
			const audio = this.soundManager.audioElements.get(soundId);

			if (audio) {
				audio.volume = effectiveVolume / 100;
				audio.play();
				this.ui.updateSoundPlayButton(soundId, true);
			}
		}

		// Update main play button and state

		this.soundManager.isPlaying = true;
		this.ui.updateMainPlayButton(true);
	}

	// Show save preset modal

	showSavePresetModal() {
		// Check if any sounds are active

		const hasActiveSounds = Object.values(this.currentSoundState).some((v) => v > 0);

		if (!hasActiveSounds) {
			alert("No active sounds for preset");
			return;
		}

		this.ui.showModal();
	}

	// Save current preset

	saveCurrentPreset() {
		const nameInput = document.getElementById("presetName");
		const name = nameInput.value.trim();

		if (!name) {
			alert("Please enter a preset name");
			return;
		}

		if (this.presetManager.presetNameExists(name)) {
			alert(`A preset with the name ${name} already exists`);
			return;
		}

		const presetId = this.presetManager.savePreset(name, this.currentSoundState);
		this.ui.hideModal();
	}
}

// Initialize app when DOM is ready

document.addEventListener("DOMContentLoaded", () => {
	const app = new AmbientMixer();
	app.init();
});
