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
    // There should be an end game screen here. Players could see their score and enter their initials.
];

// Variables that access HTML elements. They display questions and answers.
var quiz = document.getElementById("quiz");
var answerElements = document.querySelectorAll(".answer");
var questionElement = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var displayResult = document.getElementById("display-result");

// Variables to track quiz question and score.
var currentQuiz = 0;
var score = 0;

// Timer variables.
var startButton = document.querySelector(".start-button");
var secondsLabel = document.getElementById("timer-count");
var seconds = 60;

// Trying to set up click on answers in multiple choice quiz.
answerElements.onclick = function(event) {
    event.preventDefault();
    getSelected()
};

// Function that checks if user answer is correct or incorrect.
function getSelected(event) {
    var userSelect = event.target.innerHTML;
    if (userSelect === questions[currentQuiz].correct) {
        // The comments on line 58 and 62 should show after the user makes their guess.
        // When the comment displays it should have a gray line above it.
        // The comment should disappear onclick before the next question. 
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
    displayResult.textContent = "That's correct!";
}

function thatsIncorrect() {
    displayResult.textContent = "That's incorrect!";
}

function enterInitials() {
        
// var enterInitials = <button onclick="enter-initials()">Enter your initials</button>
        
        let myDiv = document.getElementById("GFG");
        // creating button element
        let button = document.createElement('BUTTON');
        // creating text to be
        //displayed on button
        let text = document.createTextNode("Button");
         
        // appending text to button
        button.appendChild(text);
        // appending button to div
        myDiv.appendChild(button);;

}

// Counts down the time to answer all 3 multiple choice questions.
function startCountDown() {
    var interval = setInterval(() => {
        secondsLabel.textContent = seconds;
        seconds--;

        if (seconds < 0) {
            clearInterval(interval);
            secondsLabel.textContent = "Expired!";
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
  
// Event listener that starts the quiz.
startButton.addEventListener("click", function() {
    startCountDown();
    buttonDisappear();
    loadQuiz();
});


   