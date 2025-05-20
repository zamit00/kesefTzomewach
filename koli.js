let startStop = 0;
let ifrmValue=0;
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = "he-IL";
recognition.interimResults = true;
recognition.maxAlternatives = 1;
recognition.continuous = true;
