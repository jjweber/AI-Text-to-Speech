// Init SpeechSyth API
const synth = window.speechSynthesis;

// DOM Elements
const textform = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');

// Init voices array
let voices = [];

const getVoices = () => {
    voices = synth.getVoices();
    console.log(voices);

    // Loop thu
    voices.forEach(voice => {
        const option = document.createElement('option');
    });
};

getVoices();
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}
