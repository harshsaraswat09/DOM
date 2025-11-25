let input = document.getElementById("names")
let btn = document.getElementById("btn")
let output = document.getElementById("winner")

btn.addEventListener("click", function() {
    // input lo aur array mein convert karna
    let names = input.value.split(",")

    // random index generate karna
    let rndminx = Math.floor(Math.random() * names.length)

    // select random name and remove extra spaces

    let rndmname = names[rndminx].trim()

    // OUTPUT

    winner.textContent = "WINNER IS: " + rndmname

   
})