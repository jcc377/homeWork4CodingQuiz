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
        $("#submitAnswer1").click(function() {
            $("#questions1").fadeOut("slow", function(){})
        });
        $("#submitAnswer1").click(function() {
            $("#questions2").fadeIn("slow", function(){})
        });
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
        $("#submitAnswer2").click(function() {
            $("#questions2").fadeOut("slow", function(){})
        });
        $("#submitAnswer2").click(function() {
            $("#questions3").fadeIn("slow", function(){})
        });
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
        $("#submitAnswer3").click(function() {
            $("#questions3").fadeOut("slow", function(){})
        });
        // $("#submitAnswer3").click(function() {
        //     $("#questions2").fadeIn("slow", function(){})
        // });
    } else {
        alert('Answer is wrong');
    }
};

