var countClicks = document.getElementById("countClicks");
var timer = document.getElementById("timer");

var clickNum = sessionStorage.getItem("clickNum") || 0;
countClicks.innerHTML = clickNum;
// var sec = 20;

// function timer() {
//     var timerID = setInterval(timer, 20000);
//     if (sec == 0) {
//         clearTimeout(timerId);
//         stopClickNum();
//     } else {
//         timer.innerHTML = sec + " seconds remaining";
//         sec--;
//     }
// }



function count(event) {
    clickNum++;
    countClicks.innerHTML = clickNum;
    sessionStorage.setItem("clickNum", clickNum);
}

window.addEventListener("click", count);