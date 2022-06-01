// Advanced


let circle = document.getElementsByClassName("circle")[0];
 let text = document.getElementById("text");
circle.addEventListener("click", function(){
    circle.style.backgroundColor = "gray";
})

circle.addEventListener("dblclick", function(){
    circle.style.backgroundColor = "blue";
})

circle.addEventListener("mouseover", function(){
    text.innerHTML='You are in the circle!'
    
})
circle.addEventListener("mouseout", function(){
    text.innerHTML='You are out of the circle!'
    
})

