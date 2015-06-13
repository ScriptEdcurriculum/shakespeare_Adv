/**
 * An object with various speech functionality. Can do speech to text, and text
 * to speech. We're adding the Speak class to the window, which means it's
 * globally available for other modules.
 */
window.Speak = (function () {
    'use strict';

    /**
     * PRIVATE VARIABLES
     * -----------------
     */
    // A browser check to make sure text to speech is supported
    var textToSpeechIsEnabled = 'speechSynthesis' in window;
    var speechToTextIsEnabled = 'SpeechRecognition' in window;

    /**
     * PRIVATE METHODS
     * -----------------
     */

    /**
     * Uses text to voice javascript API to speak a string of text
     * @param {string} text Some text for the device to speak
     * @private
     */
    function sayText(text) {
        // First check to see if the device supports text to speech
        if (textToSpeechIsEnabled) {
            // TODO
        }
    }

    /**
     * Uses voice to text javascript API to record audio to text
     * @private
     */
    function listenToVoice() {
        // First check to see if the device supports speech to text
        if (speechToTextIsEnabled) {
            // TODO
        }
    }

    /**
     * PUBLIC METHODS
     * ----------------
     */
    return {
        say: sayText,
        listen: listenToVoice
    };
})();
