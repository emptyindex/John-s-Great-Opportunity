const btnAdd = document.querySelector('.addAdditional');
const btn = document.querySelector('.talk');
const count = document.querySelector('.count');

var counter = 0;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice is activated');
}

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    console.log(transcript);

    var numOfMatches = (transcript.match(/a great opportunity/g) || []).length;
    console.log(numOfMatches);

    if (numOfMatches > 0) {
        counter = numOfMatches + counter;
        count.textContent = counter.toString();
    }
}

btn.addEventListener('click', () => {
    recognition.start();
});
btnAdd.addEventListener('click', () => {
    counter++;
    count.textContent = counter.toString();
});

