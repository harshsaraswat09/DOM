## DOM ##
Frontend ki javascript
DOM - Document Object Model

## DOM 4 Pillars

1. Selection of an element
    - querySelector
    - getElementById
    - getElementsByClassName
    - querySelectorAll

2. Changing HTML
    - textContent
    - innerHTML
    - 
3. Changing CSS
4. Event Listeners

document.querySelector('h1')
var h1 = document.querySelector('h1')
var kuch = document.querySelector('h2')
console.log(kuch)

1. Selection of an element
2. Changing HTML
var h1 = document.querySelector('h1')

h1.innerHTML = 'changed'

3. Changing CSS
var h1 = document.querySelector('h1')

h1.innerHTML = 'I am Batman'

h1.style.color = 'red'
h1.style.backgroundColor = 'pink'


-------------------------------
html
<h1>I am Harsh</h1>

<button>Reveal Personality</button>

css
button{
    background-color: crimson;
    padding: 10px 20px;
    margin-top: 50px;
}

js
var h1 = document.querySelector("h1");
var button = document.querySelector("button");

button.addEventListener("click",function(){
    h1.innerHTML ='I am Batman'
    h1.style.fontSize = '60px'
})