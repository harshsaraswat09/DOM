var grow = 0;

var btn = document.querySelector("button");
var fill = document.querySelector(".fill");
var bell = document.querySelector(".bell");

btn.addEventListener("click", function () {

  btn.style.pointerEvents = "none";
  grow = 0;
  fill.style.height = "0%";
  fill.style.background = "red";
  bell.style.opacity = 0.3;

  var speed = 20 + Math.floor(Math.random() * 20);
  var stopTime = 800 + Math.floor(Math.random() * 1200);

  var int = setInterval(() => {
    grow++;

    if (grow >= 100) grow = 100;

    fill.style.height = grow + "%";

    // ✅ COLOR CONDITION
    if (grow < 40) {
      fill.style.background = "red";
    } 
    else if (grow < 75) {
      fill.style.background = "orange";
    } 
    else {
      fill.style.background = "lime";
      bell.style.opacity = 1;   // bell lights up on high power
    }

  }, speed);

  setTimeout(() => {
    clearInterval(int);
    btn.style.pointerEvents = "auto";
  }, stopTime);
});