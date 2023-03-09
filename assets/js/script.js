//Global variables//
const letsPlay = document.getElementById("lets-play");
const scoreTracker = document.getElementsByClassName("score-tracker");
const questionBox = document.getElementById("question-box");
const optionsContainer = document.getElementsByClassName("options-container");
let answerOption = Array.from(document.getElementsByClassName("answer-option"));
const home = document.getElementsByClassName("home");
const game = document.getElementsByClassName("game");
const endPage = document.getElementsByClassName("end-page");
const homeDisplay = document.getElementById("home-display");
const gameDisplay = document.getElementById("game-display");
let userAnswer = document.getElementsByTagName("span");
let correctAnswer = document.getElementsByClassName("correct-answer");
let wrongAnswer = document.getElementsByClassName("wrong-answer");
//const theQuestion = document.getElementByI("theQuestion");
//const options = Array.from(document.querySelectorAll('option'))

let next;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [...questionsArray];
//let acceptingAnswers = false;
const maxQuestions = 3;
let score =0;

/* Displays and hides sections as advancing through gameplay via button clicks*/
letsPlay.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
});

/*Lets DOM load before starting play*/
document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

let startGame = () => {
    //questionCounter = 0;
    //document.questionOption.innerHTML = questions[currentQuestion].question;
    //score = 0;

    /* shuffles question array and selects 10 questions 
    function availableQuestions (questionsArray, 25) {
       let shuffledQuestions = [...questionsArray].sort(() => 0.5 - Math.random());
       //let number = questionsArray.length - 15;
       return shuffledQuestions.slice(0, 10);
    } */

   // availableQuestions.sort((a, b) => 0.5 - Math.random());  //sorts questions array copy into random order ?repeated below??
    getQuestion();
   // checkAnswer ();
   // showAnswer ();
}


/*function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  } */

let getQuestion = () => {
    //if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
       // localStorage.setItem('mostRecentScore', score)

       // return window.location.assign('about.html')
   // }

    //questionCounter++

    const questionIndex = Math.floor(Math.random() * availableQuestions.length); //sorts questions array copy into random order?
    currentQuestion = availableQuestions[questionIndex]; //places randomised question into the current question?
    
    questionBox.innerText = currentQuestion.question;
    //console.log(questionBox);

    answerOption.forEach((option) => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion['option' + number];
    })

    //availableQuestions.splice(questionIndex, 1);

    // acceptingAnswers = true;
}

/* Turns answer box 3 background colour red*/
//code from https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp
const spanDiv = document.getElementById("spanDiv");
    spanDiv.getElementsByTagName("*")[2].style.backgroundColor = "red";

/* let checkAnswer = () => {

    for (i = 0; i < userAnswer.length; i++) {
        userAnswer[i].onclick = showAnswer;
    }
}

const answer = currentQuestion.answer;

let showAnswer = () => {
   // let answer = currentQuestion.answer;

    if (userAnswer == answer) {
        answerOption.classList.add("correct-answer");
    } else {
        answerOption.classList.add("wrong-answer");
    }
}*/

startGame();