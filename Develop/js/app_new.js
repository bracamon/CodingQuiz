var start = document.querySelector("#start-element");
var questions = document.querySelector("#questions");
var end = document.querySelector("#end-element");
var feedback = document.querySelector("#feedback");
var startBtn = document.querySelector("#startBtn");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var start = document.querySelector("#start-element");
var score = document.querySelector("#score");

function buildQuiz() {}
function showResults() {}

startBtn.addEventListener("click", function() {
    var seconds = 60
    var timer = setInterval(function() {
        seconds--;
        document.getElementById("timer").textContent = seconds;
        if (seconds <= 0) clearInterval(timer);
    }, 1000);
    $("#timer").text(seconds);
});

buildQuiz();

recordScore.addEventListener("click", showResults);