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

// create questions
var quest = [
    {
        title : "What is a string?",
        choiceA : "1", 
        choiceB:  "number" , 
        choiceC : "plain text", 
        choiceD : "piece of twine",
        answer : "C"
    },{
        title: "Inside which HTML element should JavaScript be referenced?",
        choiceA : "<head>", 
        choiceB : "<script>", 
        choiceC : "<body>", 
        choiceD : "<div>",
        answer: "B"
    },{
        title: "Which of the following symbols precedes a comment?",
        choiceA : "//", 
        choiceB : "*/", 
        choiceC : "**", 
        choiceD : "\\",
        answer: "A"
    },{
        title: "arr.push('') performs which of the following?",
        choiceA : "removes index value at end of array", 
        choiceB : "adds index value at beginning of array", 
        choiceC : "removes index value at beginning of array", 
        choiceD : "adds index value at end of array",
        answer: "D"
    },{
        title: "Bootstrap was developed by which company?",
        choiceA : "Facebook", 
        choiceB : "Levi's", 
        choiceC : "Twitter", 
        choiceD : "Apple",
        answer: "Twitter"
    }
];

// create variables
var lastQuestion = quest.length - 1;
var runningQuestion = 0;
var count = 0;


function renderQuestion() {
    var q = quest[runningQuestion];
    questionTitle.innerHTML = "<p>"+ q.title +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

hidden.style.visibility = 'hidden';

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
});


