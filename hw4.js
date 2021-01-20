// create 15 second timer 
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1500);
//         if (--timer == 0){
//             return('Sorry - Out of Time');
//             clearInterval(timer);
//         }
// }
// window.onload = function () {
//     var oneMinute = 15 * 1,
//         display = document.querySelector('#time');
//     startTimer(oneMinute, display);
// };
startTest.addEventListener("click", startTest);
let time;
function startTestNow() {
    timeRender();
    timer = setInterval(counterRender,1000)
    progressRender();
    questionRender();
}

// ensure object identifiers can't be reassigned 
const startTest = document.getElementById("startTest");
const test = document.getElementById("test");
const question = document.getElementById("question");
const answerChoices = document.getElementById("answerChoices");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const counter = document.getElementById("counter");
const userProgress = document.getElementById("userProgress");

// Questions and choices arrays developed Here

let questions = [
    {
        question : "Who Brought democracy to Sparta around 520 BC?",

        ansChoiceA : "Lycurgus",
        ansChoiceB : "Dionysius",
        ansChoiceC : "Lebron James",
        correct : "A"
    }, {
        question : "What empire invaded modern day Greece in the 490s BC?",

        ansChoiceA : "Persian",
        ansChoiceB : "Roman",
        ansChoiceC : "Ottoman",
        correct : "A"
    }, {
        question : "What Greek isle was best known for a Giant Statue?",

        ansChoiceA : "Rhodes",
        ansChoiceB : "Crete",
        ansChoiceC : "Ithika",
        correct : "A"
    }
];

let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;

function renderQuestion(){

    let q = question[runningQuestionIndex];

question.innterHTML = "<p>" + q.question + "</p>";
ansChoiceA.innerHTML = q.ansChoiceA;
ansChoiceB.innerHTML = q.ansChoiceB;
ansChoiceC.innerHTML = q.ansChoiceC;
}



