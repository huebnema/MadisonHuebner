$(document).foundation();

// Reference:  https://www.w3schools.com/js/js_if_else.asp
function setGreeting() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning.";
    } else if (time < 20) {
        greeting = "Good afternoon.";
    } else {
        greeting = "Good evening.";
    }
    document.getElementById("greeting").innerHTML = greeting;
}

window.onload = function() {
    setGreeting();
};