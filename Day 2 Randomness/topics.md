html
<div id="box">

</div>
<button>Change</button>

css
body{
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
}

#box{
    height: 200px;
    width: 200px;
    background-color: red;
}

button{
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
    font-weight: 600;
}

button:active{
    cursor: pointer;
    scale: 0.95;
}

js
var btn = document.querySelector('button')

var box = document.querySelector('#box')

btn.addEventListener('click', function(){
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    

box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`

})