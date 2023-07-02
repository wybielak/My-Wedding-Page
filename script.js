var flag = false;

function menu_action() {
    if (flag) {
        document.getElementById("navigation_res").style.display="none";
        document.getElementById("navigation_res").style.height="0%";
        document.getElementById("res-nav-button").className="fas fa-ellipsis-h"
        flag = false;
    } else if (!flag) {
        document.getElementById("navigation_res").style.display="flex";
        document.getElementById("navigation_res").style.height="100%";
        document.getElementById("res-nav-button").className="fa-solid fa-xmark"
        flag = true;
    }
}

function hide_menu() {
    document.getElementById("navigation_res").style.display="none";
    document.getElementById("navigation_res").style.height="0%";
    document.getElementById("res-nav-button").className="fas fa-ellipsis-h"
    flag = false;
}

// Set the date we're counting down to
var countDownDate = new Date("May 18, 2023 13:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("date_counter").innerHTML = days + " dni " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("date_counter").innerHTML = "To już!";
  }
}, 1000);