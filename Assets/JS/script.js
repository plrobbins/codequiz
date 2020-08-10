var header = document.querySelector(".header");
var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");

var questionHeader = document.getElementById("questionHeader");
var answer1 = document.getElementById("one");
var answer2 = document.getElementById("two");
var answer3 = document.getElementById("three");
var answer4 = document.getElementById("four");
var correct = document.getElementById("correct");
var correctResponse = document.getElementById("correctResponse");

var finalScore = document.getElementById("finalScore");
var questionPage = document.getElementById("questionPage");
var questionButton = document.getElementById(".questionButton");

var codeQuiz = document.getElementById("codeQuiz");
var scorePage = document.getElementById("scorePage");
var highScoreButton = document.getElementById("highSCoreButton");

var formButton = document.getElementById("formButton");
var initials = document.getElementById("initials");
var initialInput = document.getElementById("initialInput");

var allDone = document.getElementById("allDone");
var allDoneButton = document.getElementById("form-inline");

var timer = document.getElementById("timer");

//Question Array
var quizQuestions = [
    {
    "quizQuestionHeader" : "Commonly used Data Types do NOT Include:", 
    "one" : "1. strings",
    "two" : "2. booleans",
    "three" : "3. alerts",
    "four" : "4. numbers",
    "correct" : "3. alerts",
     },{
    "quizQuestionHeader" : "The condition in an if / else statement is enclosed within ________.",
    "one" : "1. quotes",
    "two" : "2. curly brackets",
    "three" : "3. parenthesis",
    "four" : "4. square brackets",
    "correct" : "3. parenthesis",
    },{
    "quizQuestionHeader" : "Arrays in JavaScript can be used to store ________.",
    "one" : "1. numbers and strings",
    "two" : "2. other arrays",
    "three" : "3. booleans",
    "four" : "4. all of the above",
    "correct" : "4. all of the above",
    },{
    "quizQuestionHeader" : "String values must be enclosed within ________ when being assigned to variables",
    "one" : "1. commas",
    "two" : "2. curly brackets",
    "three" : "3. quotes",
    "four" : "4. parenthesis",
    "correct" : "3. quotes",
    },{
    "quizQuestionHeader" : "A very useful tool used for developing and debugging for printing content to the debugger is:",
    "one" : "1. JavaScript",
    "two" : "2. terminal / bash",
    "three" : "3. for loops",
    "four" : "4. console.log",
    "correct" : "4. console.log",
    },         
]
var startScore = 0
var questionIndex = 0

//Main Page
function quizChallenge() {
    codeQuiz.style.display = "block";
    header.style.display = "block";
    questionPage.style.display = "none";
    scorePage.style.display = "none";

    var startScore = 0;
    timer.textContent = "Time: " + startScore;
}

//Reset score when restarting the quiz
function resetVariables() {
    startScore = 0;
    questionIndex = 0;
}

//Beginning of the quiz
function startQuiz () {
    codeQuiz.style.display = "none";
    questionPage.style.display = "none";

    secondsLeft = 80;

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
            clearInterval(timerInterval);
            showFinalSCore();
        }
    }, 1000);
}

//Display questions
function showQuestions() {
    var q = quizQuestions[questionsIndex];
    questionHeader.innerHTML = q.questionHeader;
    answer1.innerHTML = q.one;
    answer1.setAttribute("data-answer", q.one);
    answer2.innerHTML = q.two;
    answer2.setAttribute("data-answer", q.two);
    answer3.innerHTML = q.three;
    answer3.setAttribute("data-answer", q.three);
    answer4.innerHTML = q.four;
    answer4.setAttribute("data-answer", q.four);
}
