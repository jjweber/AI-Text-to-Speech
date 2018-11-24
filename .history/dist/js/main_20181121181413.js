// Init SpeechSyth API
const syth = window.speechSynthesis;

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
    voices = syth.getVoices();
    console.log(voices);
};

getVoices();
if (synth.onvoiceschanged !== undefined) {
    
}
