var quizH1 = document.querySelector("#questions").children[0]; // <li>Coding 101<li>
var choiceList1 = document.querySelector("#questions").children[1]; //"What do you know about coding? Take this short quiz to find out!"
var choiceList2 = document.querySelector("#questions").children[2]; //"For each wrong answer you will lose 10 of your 60 seconds."
var choiceList3 = document.querySelector("#questions").children[3]; //"Answer all 3 multiple choice questions before time runs out!"

// console.log(choiceList3);

var startButton = document.querySelector(".start-button");

var secondsLabel = document.querySelector(".timer-count");
var totalSeconds = 3;
var timerInterval;

// var questionArea = document.querySelector("#questions");
    // "What do you know about coding? Take this short quiz to find out!"
    // "For each wrong answer you will lose 10 of your 60 seconds."
    // "Answer all 3 multiple choice questions before time runs out!"

var allQuestions = {"What is the acronym for Hypertext Markup Language?" : ["HTML", "HML", "HTMUL"]};
    // "What is CSS mainly used to add to a webpage?" : ["interactivity", "style" , "structure", 1],
    // "What year was JavaScript invented?" : ['2015', '2005', '1995', 2]
// };

var question1 = Object.keys(allQuestions); // "What is the acronym for Hypertext Markup Language?"
var arrayOfAnswerValues = Object.values(allQuestions); // [Array(3)]
var answers1List = arrayOfAnswerValues[0]; // ["HTML", "HML", "HTMUL"]

var answer1 = answers1List[0];
var answer2 = answers1List[1];
var answer3 = answers1List[2];


// var currentQuestion = 0;

function startQuiz() {
    quizH1.textContent = question1;
    quizH1.style.fontSize = "32px";
    quizH1.style.paddingBottom = "50px";
    
    choiceList1.textContent = answer1
    choiceList1.style.backgroundColor = "mediumpurple";
    choiceList1.style.color = "#fff";
    
    choiceList2.textContent = answer2;
    choiceList2.style.backgroundColor = "mediumpurple";
    choiceList2.style.color = "#fff";

    choiceList3.textContent = answer3;
    choiceList3.style.backgroundColor = "mediumpurple";
    choiceList3.style.color = "#fff";
}
        // Select first child element:
        // var changeListItems = document.getElementById("questions").children[0];

        // Select all child elements?
        // var changeListItems = document.getElementById("questions").children;

        // console.log(changeListItems);
        
        // Create a new text node:
        // const newNode = document.createTextNode("Water");

        // var newNode = answers;
        // console.log(newNode);
        
        // Replace the text node:
        // changeListItems.replaceChild(newNode, changeListItems);
       

    // let changeToQuestions = document.getElementById("questions");
    // changeToQuestions.textContent = // Object with 3 questions and multiple choice answers.


function setTime() {
    timerInterval = setInterval(function() {
        --totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds%60);
    }, 1000);
}

// function stopTimer() {
//     clearInterval(timerInterval);
//     alert("You have run out of time!")
// } 

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return 0 + valString;
    } else {
        return valString;
    }
}

// function loadQuestion(current) {
//     var question = Object.keys(allQuestions)[current];

//     questionArea.textContent = "";
//     questionArea.textContent = question;
// }

function buttonDisappear() {
    startButton.setAttribute("style", "display:none");
}

startButton.addEventListener("click", function() {
    startQuiz();
    setTime();
    buttonDisappear();
    // loadQuestion();
});

// clickToStopButton.addEventListener("click", stopTimer);


// var questions = [{
//     q: "What does HTML stand for?",
//     a: [{ text: "Hypertext Markup Language", isCorrect: true },
//     { text: "Highly Technical Markup Language", isCorrect: false },
//     { text: "Help Technicians Make Language", isCorrect: true },
//     { text: "Holy Terminal More Lettuce", isCorrect: false }
//     ]
// },
// {
//     q: "What is CSS mainly used for on a webpage?",
//     a: [{ text: "Interactivity", isCorrect: false, isSelected: false },
//     { text: "Structure", isCorrect: false },
//     { text: "Styling", isCorrect: true },
//     { text: "All of the above", isCorrect: false }
//     ]
// },
// {
//     q: "When was JavaScript invented?",
//     a: [{ text: "2015", isCorrect: false },
//     { text: "2005", isCorrect: false },
//     { text: "1995", isCorrect: true },
//     { text: "1985", isCorrect: false }
//     ]
// }
// ]

// var list = document.createElement("li");
    // Node.appendChild(document.createTextNode(answers));

// console.log(question);

// var list = document.createElement('li');
// node.appendChild(document.createTextNode('Scooter'));
 
// document.querySelector('ul').appendChild(node);