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
var highScoreButton = document.getElementById("highScoreButton");

var formButton = document.getElementById("formButton");
var initials = document.getElementById("initials");
var initialInput = document.getElementById("initialInput");

var allDone = document.getElementById("allDone");
var allDoneButton = document.getElementById("form-inline");

var timer = document.getElementById("timer");
var timerInterval
//quizChallenge();
// Start quiz
submitButton.addEventListener("click", function () {
    startQuiz()
    console.log("start")
})



//Question Array
var quizQuestions = [
    {
        "questionHeader": "Commonly used Data Types do NOT Include:",
        answers: ["strings",
            "booleans",
            "alerts",
            "numbers"],
        "correct": "alerts",
    }, {
        "questionHeader": "The condition in an if / else statement is enclosed within ________.",
        answers: ["quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"],
        "correct": "parenthesis",
    }, {
        "questionHeader": "Arrays in JavaScript can be used to store ________.",
        answers: ["numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"],
        "correct": "all of the above",
    }, {
        "questionHeader": "String values must be enclosed within ________ when being assigned to variables",
        answers: ["commas",
            "curly brackets",
            "quotes",
            "parenthesis"],
        "correct": "quotes",
    }, {
        "questionHeader": "A very useful tool used for developing and debugging for printing content to the debugger is:",
        answers: ["JavaScript",
            "terminal / bash",
            "for loops",
            "console.log"],
        "correct": "console.log",
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
    correctResponse.innerHTML =""
    timer.innerHTML=""
    startScore = 0;
    questionIndex = 0;
}

//Beginning of the quiz
function startQuiz() {
    codeQuiz.classList.add("d-none")
    //questionPage.style.display = "none";

    secondsLeft = 80;

    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
            clearInterval(timerInterval);
            showFinalScore();
        }
    }, 1000);
    questionPage.classList.remove('d-none')
    showQuestions()
}

//Display questions
function showQuestions() {
    var q = quizQuestions[questionIndex];
    var answersEl = document.querySelector("#answers")
    answersEl.innerHTML = ""
    for (let i = 0; i < q.answers.length; i++) {
        var answerButton = document.createElement("button")
        answerButton.textContent = q.answers[i]
        answerButton.setAttribute("data-answer", q.answers[i])
        answerButton.classList.add("mr-2", "btn", "py-2", "btn-primary")
        answerButton.onclick = checkAnswer
        answersEl.appendChild(answerButton)
    }
    questionHeader.innerHTML = q.questionHeader;

}

//Event listeners for answer
//showQuestions();
// answer1.addEventListener("click", function (event) {
//     checkAnswer(event);
// })
// answer2.addEventListener("click", function (event) {
//     checkAnswer(event);
// })
// answer3.addEventListener("click", function (event) {
//     checkAnswer(event);
// })
// answer4.addEventListener("click", function (event) {
//     checkAnswer(event);
// })

//Check quiz answers
function checkAnswer(event) {
    event.preventDefault();

    var answer = event.currentTarget.dataset.answer;
    console.log(answer)


    if (quizQuestions[questionIndex].correct === answer) {

        correctResponse.textContent = "Correct!";
    } else {
        correctResponse.textContent = "Wrong!";
        secondsLeft -= 10
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
    }

    if (quizQuestions.length === questionIndex + 1) {
        showFinalScore();
        return;
    }
    questionIndex++;
    showQuestions();
}
//All done Page
function showFinalScore() {
    questionPage.classList.add("d-none")
    scorePage.classList.remove("d-none")
    clearInterval(timerInterval)
    finalScore.textContent = "Your final score is " + secondsLeft;
    formButton.textContent = "Submit";
    initials.textContent = "Enter your Initials: ";
}

var highScoreArray = []
//Display high score
function highScore() {
    var highScoreEl =document.querySelector("#highScoreList")
    highScoreEl.innerHTML=""
    timer.innerHTML=""
    clearInterval(timerInterval)
    console.log("test")
   scorePage.classList.add("d-none")
   questionPage.classList.add("d-none")
   codeQuiz.classList.add("d-none")
   highScoreButton.classList.remove("d-none")
   var highScoreArray = JSON.parse(localStorage.getItem("highScore"))
    if(highScoreArray === null){
        highScoreEl.textContent = "No scores at this time"
        return
    }
    highScoreArray.sort(function(a, b) {
        return b.score - a.score;
      });
    for (let i = 0; i < highScoreArray.length; i++) {
        var newLi = document.createElement("li")
        newLi.textContent = "Intials: "+highScoreArray[i].intials + " Score: "+ highScoreArray[i].score
        highScoreEl.appendChild(newLi)
    }
    var getInitials = document.getElementById("initialInput").value;


    //var localStorageArray = { score: secondsLeft, initials: getInitials };

}

//Initial button for high score
formButton.addEventListener("click", function () {
    event.preventDefault()
    var newScore = { score: secondsLeft, intials: initialInput.value }
    console.log(newScore)
    var highScoreArray = JSON.parse(localStorage.getItem("highScore")) || [];
    highScoreArray.push(newScore)
    localStorage.setItem("highScore", JSON.stringify(highScoreArray));

    highScore();
    console.log("initial button")
})

//Clear high score
clearHighScore.addEventListener("click", function () {
    localStorage.clear();
    highScore()
})

//Go back button
goBack.addEventListener("click", function () {
    highScoreButton.classList.add("d-none")
    codeQuiz.classList.remove("d-none")
    resetVariables()
    
    console.log("restart quiz")
})

