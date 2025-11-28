var btn = document.querySelector('button')

var main = document.querySelector('main')

var emojis = ["🔥", "😂", "❤️", "😎", "🚀", "👑", "💯"]

btn.addEventListener('click', function(){
    var div = document.createElement('div')

    var rndminx = Math.floor(Math.random() * emojis.length)

    div.innerHTML = emojis[rndminx]

    
    div.className = 'emoji'

    var x = Math.random() * 90
    var y = Math.random() * 90

    div.style.left = x + "%"
    div.style.top = y + "%"

    main.appendChild(div) 
})