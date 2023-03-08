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
let availableQuestions = [];
//let acceptingAnswers = false;
const maxQuestions = 3;
let score =0;

/* Questions array */
let questionsArray = [{
    question: "Movie acting suits me because I only need to be good for 90 seconds at a time",
    option1: "Ryan Reynolds",
    option2: "Angelina Jolie",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "3",
},
{
    question: "Being a father is the single greatest feeling on earth. Not including those wonderful years I spent without a child, of course",
    option1: "Zach Galifianakis",
    option2: "Ryan Reynolds",
    option3: "Bill Murray",
    option4: "Arnold Schwarzenegger",
    answer: "2",
},
{
    question: "Get at least eight hours of beauty sleep, nine if you are ugly",
    option1: "Christina Aguilera",
    option2: "Tara Reid",
    option3: "Marilyn Monroe",
    option4: "Betty White",
    answer: "4",
},
]

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
    availableQuestions = [...questionsArray];
    getQuestion();
    checkAnswer ();
    showAnswer ();
}

let getQuestion = () => {
    //if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
       // localStorage.setItem('mostRecentScore', score)

       // return window.location.assign('about.html')
   // }

    //questionCounter++

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    
    questionBox.innerText = currentQuestion.question;
    //console.log(questionBox);

    answerOption.forEach((option) => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion['option' + number];
    })

    //availableQuestions.splice(questionIndex, 1);

    // acceptingAnswers = true;
}

let checkAnswer = () => {
    let userAnswer = document.getElementsByTagName("span");

    for (i = 0; i < userAnswer.length; i++) {
        userAnswer[i].onclick = showAnswer;
    }
}

let answer = currentQuestion.answer;

let showAnswer = () => {
   // let answer = currentQuestion.answer;

    if (userAnswer == answer) {
        answerOption.classList.add("correct-answer");
    } else {
        answerOption.classList.add("wrong-answer");
    }
}

startGame();