//Global variables//
const letsPlay = document.getElementById("lets-play");
const scoreTracker = document.getElementsByClassName("score-tracker");
const questionBox = document.getElementsByClassName("question-box");
const optionsContainer = document.getElementsByClassName("options-container");
const questionOption = document.getElementsByClassName("question-option");
const home = document.getElementsByClassName("home");
const game = document.getElementsByClassName("game");
const endPage = document.getElementsByClassName("end-page");
const homeDisplay = document.getElementById("home-display");
const gameDisplay = document.getElementById("game-display");

let next;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
const max_questions = 10;
let score;

/*Lets DOM load before starting play*/
document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

/* Displays and hides sections as advancing through gameplay via button clicks*/
letsPlay.addEventListener("click", () => {
    homeDisplay.style.display = "none";
    gameDisplay.style.display = "block";
});

function startGame() {
    currentQuestion = 0;
    document.questionOption.innerHTML = questions[currentQuestion].question;
}

/* Questions array */

const questionsArray = [{
    question: "Movie acting suits me because I only need to be good for 90 seconds at a time",
    options: ["Ryan Reynolds", "Angelina Jolie", "Bill Murray", "Arnold Schwarzenegger"],
    answer: "Bill Murray",
},
{
    question: "Being a father is the single greatest feeling on earth. Not including those wonderful years I spent without a child, of course",
    options: ["Zach Galifianakis", "Ryan Reynolds", "Bill Murray", "Arnold Schwarzenegger"],
    answer: "Ryan Reynolds",
},
{
    question: "Get at least eight hours of beauty sleep, nine if you’re ugly",
    options: ["Christina Aguilera", "Tara Reid", "Marilyn Monroe", "Betty White"],
    answer: "Betty White",
},
{
    question: "I am odd-looking. I sometimes think I look like a funny Muppet",
    options: ["Angelina Jolie", "Marilyn Monroe", "Betty White", "Tara Reid"],
    answer: "Angelina Jolie",
},
{
    question: "I make Jessica Simpson look like a rock scientist",
    options: ["Christina Aguilera", "Kim Kardashian", "Tara Reid", "Angelina Jolie"],
    answer: "Tara Reid",
},
{
    question: "The word abbreviation sure is long for what it means",
    options: ["Zach Galifianakis", "Albert Einstein", "Betty White", "Ryan Reynolds"],
    answer: "Zach Galifianakis",
},
{
    question: "I definitely want...(him) to be christened, but I don’t know into what religion yet",
    options: ["Carrie Fisher", "Angelina Jolie", "David Beckham", "Kim Kardashian"],
    answer: "David Beckham",
},
{
    question: "We didn’t underestimate them. They were a lot better than we thought",
    options: ["Britney Spears", "Donald Trump", "David Beckham", "Bobby Robson"],
    answer: "Bobby Robson",
},
{
    question: "So, where’s the Cannes Film Festival being held this year?",
    options: ["Christina Aguilera", "Britney Spears", "Tara Reid", "Paris Hilton"],
    answer: "Christina Aguilera",
},
{
    question: "The cool thing about being famous is traveling. I have always wanted to travel across seas, like to Canada and stuff",
    options: ["Paris Hilton", "David Beckham", "Britney Spears", "Tara Reid"],
    answer: "Britney Spears",
},
{
    question: "It’s really hard to maintain a one-on-one relationship if the other person is not going to allow me to be with other people",
    options: ["Kate Moss", "Axel Rose", "Jaden Smith", "Bobby Robson"],
    answer: "Axel Rose",
},
{
    question: "I’m sure wherever my Dad is, he’s looking down on us. He’s not dead, just very condescending",
    options: ["Bobby Robson", "Sean Connery", "Betty White", "Jack Whitehall"],
    answer: "Jack Whitehall",
},
{
    question: "Two things are infinite: the universe and human stupidity; and I’m not sure about the universe",
    options: ["Albert Einstein", "Jaden Smith", "Jack Whitehall", "Sean Connery"],
    answer: "Albert Einstein",
},
{
    question: "Man … ninjas are kind of cool … I just don’t know any personally",
    options: ["Jaden Smith", "Albert Einstein", "Kanye West", "Kate Moss"],
    answer: "Kanye West",
},
{
    question: "Do you know where to find marble conference tables? I’m looking to have a conference…not until I get the table though",
    options: ["David Beckham", "Axel Rose", "Donald Trump", "Kanye West"],
    answer: "Kanye West",
},
{
    question: "Nothing tastes as good as skinny feels",
    options: ["Kate Moss", "Paris Hilton", "Justin Bieber", "Carrie Fisher"],
    answer: "Kate Moss",
},
{
    question: "I don’t really think, I just walk",
    options: ["Donald Trump", "Sean Connery", "Axel Rose", "Paris Hilton"],
    answer: "Paris Hilton",
},
{
    question: "How can mirrors be real if our eyes aren’t real?",
    options: ["Kanye West", "Jaden Smith", "Albert Einstein", "Justin Bieber"],
    answer: "Jaden Smith",
},
{
    question: "I have a swagger coach that helps me and teaches me different swaggerific things to do…",
    options: ["Jaden Smith", "Kanye West", "Donald Trump", "Justin Bieber"],
    answer: "Justin Bieber",
},
{
    question: "The secret to a happy marriage? Do whatever your wife tells you. ‘Yes, dear.’ And breathe",
    options: ["Denzil Washington", "Jack Whitehall", "Donald Trump", "Bobby Robson"],
    answer: "Denzil Washington",
},
{
    question: "Instant gratification takes too long",
    options: ["Kanye West", "Justin Bieber", "Axel Rose", "Carrie Fisher"],
    answer: "Carrie Fisher",
},
{
    question: "I like women, I don’t understand them, but I like them",
    options: ["Sean Connery", "Marilyn Monroe", "Donald Trump", "Arnold Schwarzenegger"],
    answer: "Sean Connery",
},
{
    question: "I think gay marriage is something that should be between a man and a woman",
    options: ["Britney Spears", "Donald Trump", "Justin Bieber", "Arnold Schwarzenegger"],
    answer: "Arnold Schwarzenegger",
},
{
    question: "Smoking kills. If you’re killed, you’ve lost a very important part of your life",
    options: ["Kim Kardashian", "Brooke Shields", "Paris Hilton", "Marilyn Monroe"],
    answer: "Brooke Shields",
},
{
    question: "If you’re gonna be two-faced at least make one of them pretty",
    options: ["Kate Moss", "Betty White", "Brooke Shields", "Marilyn Monroe"],
    answer: "Marilyn Monroe",
},
]