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

window.onload = function(){
(function(){
  var counter = 20;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("time");
      span.innerHTML = counter;
    }
    if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
    }
  }, 1000);
})();
};

function myQ1Function() {
    document.getElementById("q1Verbiage").innerHTML = "Hello"
};

