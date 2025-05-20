let startStop = 0; let ifrmValue=0; let finalTranscript = ''; let finalTranscript1 = ''; var chngContinuous=true;var transcript='';
var timeToListen=5000;var interval;
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = "he-IL";
recognition.interimResults = true;
recognition.maxAlternatives = 1;
recognition.continuous = true;

recognition.onstart = function () {
  if(!chngContinuous){
    const timerDisplay = document.getElementById('timerDisplay');
    let secondsPassed = 0;
    timerDisplay.style.display = 'block';
    interval = setInterval(() => {
      secondsPassed++;
      timerDisplay.textContent = secondsPassed;
      if (secondsPassed * 1000 >= timeToListen) {
        clearInterval(interval);
        timerDisplay.style.display = 'none';
        recognition.stop(); 
      }
    }, 1000);
}
};



recognition.onresult = (event) => {
  if(!transcript) return;
  if (transcript.includes("עצור")) {
    startStop = 1;
    recognition.stop();
    return;
  }
  if(transcript.includ("ארוך")){chngContinuous=false;}
  else if(transcript.includ("rdhk")){chngContinuous=true;}
  if(!chngContinuous && transcript.includes("עצור")){
      transcript = event.results[0][0].transcript;
      handleSearchFromVoice(transcript);}
  else if(chngContinuous && transcript.includes("עצור")){
      const result = event.results[event.resultIndex];
      transcript = result[0].transcript.trim();
      var matchKlali = transcript.match(/(הסבר|קולי|חזור|מאשר|שימוש|תנאי|ראש|תחתית|סוכן|קשר|מחשבונים|פיננסים|סיכון|שאלון|שארפ|שרפ|הפעל|נקה|הפאל|הבית|למעלה|למטה|עבור)/);
      if(matchKlali){
        recognition.stop();
         handleSearchFromVoice(matchKlali);
      }
    }
}
  
   
  
   
 
  
  

      








