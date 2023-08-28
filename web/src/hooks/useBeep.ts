// The browser will limit the number of concurrent audio contexts
// So be sure to re-use them whenever you can
const myAudioContext = new AudioContext()

/**
 * Helper function to emit a beep sound in the browser using the Web Audio API.
 *
 * https://ourcodeworld.com/articles/read/1627/how-to-easily-generate-a-beep-notification-sound-with-javascript
 *
 * @param {number} duration - The duration of the beep sound in milliseconds.
 * @param {number} frequency - The frequency of the beep sound.
 * @param {number} volume - The volume of the beep sound.
 *
 */
const useBeep = (duration = 100, frequency = 880, volume = 100) => {
  return () => {
    const oscillatorNode = myAudioContext.createOscillator()
    const gainNode = myAudioContext.createGain()
    oscillatorNode.connect(gainNode)

    // Set the oscillator frequency in hertz
    oscillatorNode.frequency.value = frequency

    // Set the type of oscillator
    oscillatorNode.type = 'square'
    gainNode.connect(myAudioContext.destination)

    // Set the gain to the volume
    gainNode.gain.value = volume * 0.01

    // Start audio with the desired duration
    oscillatorNode.start(myAudioContext.currentTime)
    oscillatorNode.stop(myAudioContext.currentTime + duration * 0.001)
  }
}

export default useBeep
