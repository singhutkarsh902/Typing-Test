const setofWords = [
    "Arsenal have completed a sensational deadline day swoop for Atletico Madrid midfielder Thomas Partey.",
    "Manchester United complete deals for Edinson Cavani and Alex Telles",
    "Delhi Capitals out-batted, out-bowled and out-fielded Royal Challengers Bangalore in Dubai,",
    "Bhuvneshwar Kumar is understood to have been ruled out of IPL 2020 although little is known about the nature of his injury"
];

const msg = document.getElementById('msg');
const typedWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const game = () => {
    let randomNumber = Math.floor( Math.random() * setofWords.length);
    msg.innerText = setofWords[randomNumber]; 
    let date = new Date;
    startTime = date.getTime();
    btn.innerText = "Done";
}

const wordCounter = (str) => {
    let response = str.split(" ").length - 1;
    console.log(response);
    return response;
}

const endGame = () => {
    let date = new Date;
    endTime = date.getTime();
    let totalTime = (endTime - startTime)/1000;
    console.log(totalTime);

    let totalStr = typedWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.ceil((wordCount/totalTime)*60);
    console.log(speed);

    let finalMsg = "You typed at "+speed+" words per minute";
    msg.innerText = finalMsg;
}

btn.addEventListener('click', function () {
    if(this.innerText == "Start") {
        typedWords.disabled = false;
        game();
    }
    else if(this.innerText == "Done") {
        btn.innerText = "Start";
        endGame();
    }
})

