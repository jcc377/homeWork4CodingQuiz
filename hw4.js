// timer created and started
window.onload = function () {
    (function () {
        var counter = 20;
        setInterval(function () {
            counter--;
            if (counter >= 0) {
                span = document.getElementById("time");
                span.innerHTML = counter;
            }
            if (counter === 0) {
                alert('Test Over');
                clearInterval(counter);
            }
        }, 1000);
    })();
};
function startTest(){
    // start timer here
    // unhide the first question
}
// tally answers
var correctAnswers = 0


// var currentQuestionIndex = 1
var startButton = document.getElementById("styleBegin");
startButton.onclick = startTest;
var scoreEl = document.getElementById("score");
// lookup how to change text content in javascript @
// scoreEl.textContent = Something lookup that will display # of correct ans

// Question 1 interactive answer
var submitAnswer1 = function () {

    var radios = document.getElementsByName('choice');
    var val = "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    if (val == "") {
        alert('please select choice answer');
    } else if (val == "Lycurgus") {
        alert('Answer is correct !');
        correctAnswers ++;
        // rehides the question
        // unhides the next question
    } else {
        alert('Answer is wrong');
    }
};
// Q2 Interactive answer selection
var submitAnswer2 = function () {

    var radios = document.getElementsByName('choice');
    var val = "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    if (val == "") {
        alert('please select choice answer');
    } else if (val == "Byzantium") {
        alert('Answer is correct !');
       
    } else {
        alert('Answer is wrong');
    }
};

// Q3 Interactive answer selection
var submitAnswer3 = function () {

    var radios = document.getElementsByName('choice');
    var val = "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    if (val == "") {
        alert('please select choice answer');
    } else if (val == "Argyraspides") {
        alert('Answer is correct !');
       
    } else {
        alert('Answer is wrong');
    }
};

// Storing user progress with respect to anwering Questions
// function userProgress() {
//     var correctAns = localStorage.getItem("correctAns");
//     var incorrectAns = localStorage.getItem("incorrectAns");
  
//     if (!correctAns || !incorrectAns) {
//       return;
//     }
  
//     userEmailSpan.textContent = correctAns;
//     userPasswordSpan.textContent = incorrectAns;
//   }

//   localStorage.setItem("correctAns", correctAns);
//   localStorage.setItem("incorrectAns", incorrectAns);
//   renderLastRegistered();
