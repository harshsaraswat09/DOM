var allBtn = document.querySelectorAll('button')

allBtn.forEach(function(elem){
    elem.addEventListener('click', function(){
        elem.innerHTML = "Remove Friend"
    })
})