// Type definitions for sound effects
export type SoundEffect = 'click' | 'pop' | 'hover' | 'whoosh' | 'tab' | 'bubble';

// Cache for preloaded audio elements
const audioCache: Record<SoundEffect, HTMLAudioElement> = {} as Record<SoundEffect, HTMLAudioElement>;

// Sound settings 
const soundSettings = {
  volume: 0.5,
  muted: false
};

/**
 * Preload sound files into cache for quicker playback
 */
export function preloadSounds(): void {
  const sounds: SoundEffect[] = ['click', 'pop', 'hover', 'whoosh', 'tab', 'bubble'];
  
  sounds.forEach(sound => {
    const audio = new Audio(`/sounds/${sound}.mp3`);
    audio.preload = 'auto';
    audioCache[sound] = audio;
    
    // Force preloading
    audio.load();
  });
}

/**
 * Play a sound effect
 * @param sound - The sound effect to play
 * @param volume - Optional volume override
 */
export function playSound(sound: SoundEffect, volume?: number): void {
  if (soundSettings.muted) return;
  
  // Create a new audio instance to allow overlapping sounds
  const audio = audioCache[sound]?.cloneNode(true) as HTMLAudioElement;
  
  if (audio) {
    // Set volume (use override if provided, otherwise use global setting)
    audio.volume = volume !== undefined ? volume : soundSettings.volume;
    
    audio.play()
      .catch(err => {
        console.error(`Error playing sound ${sound}:`, err);
      });
    
    // Clean up after playback to prevent memory leaks
    audio.addEventListener('ended', () => {
      audio.remove();
    });
  }
}

/**
 * Set the global volume for all sound effects
 * @param volume - Volume level (0.0 to 1.0)
 */
export function setVolume(volume: number): void {
  soundSettings.volume = Math.max(0, Math.min(1, volume));
}

/**
 * Toggle mute status for all sounds
 * @param muted - Optional explicit mute status, otherwise toggles current state
 * @returns The new mute status
 */
export function toggleMute(muted?: boolean): boolean {
  if (muted !== undefined) {
    soundSettings.muted = muted;
  } else {
    soundSettings.muted = !soundSettings.muted;
  }
  
  return soundSettings.muted;
}

/**
 * Get the current mute status
 * @returns Current mute status
 */
export function isMuted(): boolean {
  return soundSettings.muted;
}

/**
 * Get the current volume level
 * @returns Current volume (0.0 to 1.0)
 */
export function getVolume(): number {
  return soundSettings.volume;
}