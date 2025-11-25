var countDisplay = document.getElementById("count")

var increaseBtn = document.getElementById("inc")

var decreaseBtn = document.getElementById("dec")

var resetBtn = document.getElementById("reset")

var count = 0

function updateColor(){
    if(count > 0){
        countDisplay.style.color = "green"
    } else if(count < 0){
        countDisplay.style.color = "red"
    } else {
        countDisplay.style.color = "black"
    }
}

increaseBtn.addEventListener("click", function(){
    count++
    count.innerText = count
    updateColor()
})

decreaseBtn.addEventListener("click", function(){
    count--;
    countDisplay.innerHTML = count;
    updateColor();
});

resetBtn.addEventListener("click", function(){
    count = 0;
    countDisplay.innerHTML = count;
    updateColor();
});