// DOM elements
var quiz = document.getElementById("quiz");
var answerElements = document.querySelectorAll(".answer");
var questionElement = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var correctEl = document.getElementById("display-result");
var highScoreEl = document.querySelector('#highScores')

// Track quiz question and score
var currentQuiz = 0;
var score = 0;

// Timer variables
var startButton = document.querySelector(".start-button");
var countDownEl = document.getElementById("countdown");
var seconds = 60;

// Multiple choice questions and answers object.
var questions = [
    { 
        question: "What is the acronym for Hypertext Markup Language?",
        a: "HTML",
        b: "HML",
        c: "HTMUL",    
        correct: "HTML",
    },

    {
        question: "What is CSS mainly used to add to a webpage?",
        a: "interactivity",
        b: "style",
        c: "structure",
        correct: "style",
    },

    {
        question: "What year was JavaScript invented?",
        a: "2015",
        b: "2005",
        c: "1995",
        correct: "1995"
    }
];

// Function to see if user answer is correct
function getSelected(event) {
    var userSelect = event.target.innerHTML;
    if (userSelect === questions[currentQuiz].correct) {
        score++;
        thatsCorrect();
    } else {
        seconds -= 10;
        thatsIncorrect();
    }
    if (currentQuiz < questions.length -1) {
        currentQuiz++
        loadQuiz();
    } else {
        quiz.innerHTML = `<h1>You answered ${score}/${questions.length} questions correctly.<h1>`;
        enterInitials();
    }   
};

function thatsCorrect() {
    // There should be a gray line above this.
    correctEl.innerHTML = "That's correct!";
}

function thatsIncorrect() {
    // There should be a gray line above this.
    correctEl.innerHTML = "That's incorrect!";
}

function enterInitials() {
    // Input for initials
    initTextEl = document.createElement("input");
    initTextEl.setAttribute("id", "initials-input");
    initTextEl.setAttribute("type", "text");
    initTextEl.setAttribute("name", "initials");
    initTextEl.setAttribute("placeholder", "Enter initials here");
    
    quiz.appendChild(initTextEl);

    // Create save button element
    saveButtonEl = document.createElement("button");
    saveButtonEl.setAttribute("id", "save-btn");
    saveButtonEl.setAttribute("class", "save-btn");
    saveButtonEl.setAttribute("type", "submit");
    saveButtonEl.textContent = "Save score";

    quiz.appendChild(saveButtonEl);

    // What does this event listener do?
    quiz.addEventListener("submit", viewHighScores);
}

// What does this function do?
function viewHighScores(e) {
    e.preventDefault();
    var name = document.querySelector("#initials-input").textContent;
    savedInit(name);

    quiz.replaceWith(highScoreEl)
    loadSaveScores();
}

// What does this variable do?
var savedScore = function() {
    localStorage.setItem("score", JSON.stringify(score));
}

// What does this variable do?
var savedInit = function(initials) {
    localStorage.setItem("initials", JSON.stringify(initials));
}

// What does this function do?
function loadSaveScores() {
    var savedScore = localStorage.getItem("score");
    var savedInit = localStorage.getItem("initials");

    savedScore = JSON.parse(savedScore);
    savedInit = JSON.parse(savedInit);

    document.getElementById("highscores").innerHTML = savedInit + "-" + savedScore;
}
        
// Counts down the time to answer all 3 multiple choice questions.
function startCountDown() {
    var interval = setInterval(() => {
        countDownEl.textContent = seconds + " seconds left";
        seconds--;

        if (seconds < 0) {
            clearInterval(interval);
            countDownEl.textContent = "Expired!";
            gaveOver();
        }
    }, 1000);
} 
    
// Removes "Start" button from screen after it is clicked on.
function buttonDisappear() {
    startButton.setAttribute("style", "display:none");
}

// Function that loads the quiz.
function loadQuiz() {
    var currentQuizData = questions[currentQuiz];
    questionElement.innerHTML = currentQuizData.question;
    a_text.textContent = currentQuizData.a;
    b_text.textContent = currentQuizData.b;
    c_text.textContent = currentQuizData.c;
    answerElements.forEach((answerElement) => {
        answerElement.onclick = getSelected;
    });
}
  
// Trying to set up click on answers in multiple choice quiz.
answerElements.onclick = function(event) {
    event.preventDefault();
    getSelected()
};

// Event listener that starts the quiz.
startButton.addEventListener("click", function() {
    startCountDown();
    buttonDisappear();
    loadQuiz();
});
