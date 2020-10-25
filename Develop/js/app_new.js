// element selection by id
var start = document.querySelector("#start-element");
var questions = document.querySelector("#questions"); 
var end = document.querySelector("#end-element"); 
var feedback = document.querySelector("#feedback");
var startBtn = document.querySelector("#startBtn"); 
var questionTitle = document.querySelector("#question-title");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var start = document.querySelector("#start-element");
var score = document.querySelector("#score");
var hidden = document.querySelector(".hide");
var progress = document.querySelector("#progress");

// create questions
var quest = [
    {
        title : "What is a string?",
        choiceA : "A) 1", 
        choiceB:  "B) number" , 
        choiceC : "C) plain text", 
        choiceD : "D) piece of twine",
        correct : "C"
    },{
        title: "Inside which HTML element should JavaScript be referenced?",
        choiceA : "A) head", 
        choiceB : "B) script", 
        choiceC : "C) body", 
        choiceD : "D) div",
        correct: "B"
    },{
        title: "Which of the following symbols precedes a comment?",
        choiceA : "A) //", 
        choiceB : "B) */", 
        choiceC : "C) **", 
        choiceD : "D) \\",
        correct: "A"
    },{
        title: "arr.push('') performs which of the following?",
        choiceA : "A) removes index value at end of array", 
        choiceB : "B) adds index value at beginning of array", 
        choiceC : "C) removes index value at beginning of array", 
        choiceD : "D) adds index value at end of array",
        correct: "D"
    },{
        title: "Bootstrap was developed by which company?",
        choiceA : "A) Facebook", 
        choiceB : "B) Levi's", 
        choiceC : "C) Twitter", 
        choiceD : "D) Apple",
        correct: "Twitter"
    }
];

// create variables
var lastQuestion = quest.length - 1;
var runningQuestion = 0;
var count = 0;
var score = 0;

// render question
function renderQuestion() {
    var q = quest[runningQuestion];
    questionTitle.innerHTML = "<p>"+ q.title +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

hidden.style.visibility = 'hidden';

// start quiz
startBtn.addEventListener("click", function() {
    var seconds = 60
    var timer = setInterval(function() {
        seconds--;
        document.getElementById("timer").textContent = seconds;
        if (seconds <= 0) clearInterval(timer);
    }, 1000);
    $("#timer").text(seconds);
    hidden.style.visibility = 'visible';
    startBtn.style.visibility = 'hidden';

    renderQuestion();
    renderQuestion();
});

// render progress
function renderProgress() {
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// check Answer

function checkAnswer(answer) {
    if( answer == quest[runningQuestion].correct) {
        score++;
    } 
        count = 0;
        if(runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        }   else {
            clearInterval(timer);
            }
}
