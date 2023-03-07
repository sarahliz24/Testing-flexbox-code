//Global variables//
const letsPlay = document.getElementById("lets-play");
//const scoreTracker = document.getElementsByClassName("score-tracker");
const questionBox = document.getElementsByClassName("question-box");
//const optionsContainer = document.getElementsByClassName("options-container");
const questionOption = Array.from(document.querySelectorAll("question-option"));
const home = document.getElementsByClassName("home");
const game = document.getElementsByClassName("game");
//const endPage = document.getElementsByClassName("end-page");
const homeDisplay = document.getElementById("home-display");
const gameDisplay = document.getElementById("game-display");
//const options = Array.from(document.querySelectorAll('option'))

//let next;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
let acceptingAnswers = true
const maxQuestions = 3;
//let score;

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
    questionCounter = 0;
    //document.questionOption.innerHTML = questions[currentQuestion].question;
    availableQuestions = [...questionsArray];
    getQuestion()
}

let getQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('about.html')
    }

   questionCounter = ++

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    questionBox.innerHTML = currentQuestion.question;

    questionOption.forEach((option) => {
        const number = option.dataset.option;
        option.innerHTML = currentQuestion['option' + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

startGame();

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
        question: "Get at least eight hours of beauty sleep, nine if you’re ugly",
        option1: "Christina Aguilera",
        option2: "Tara Reid",
        option3: "Marilyn Monroe",
        option4: "Betty White",
        answer: "4",
    },
]