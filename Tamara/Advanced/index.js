document.getElementById("circle").addEventListener("click", mouseClick);
document.getElementById("circle").addEventListener("dblclick", mouseDblClick);
document.getElementById("circle").addEventListener("mouseover", mouseOver);
document.getElementById("circle").addEventListener("mouseout", mouseOut);

function mouseClick() {
  document.getElementById("circle").style.backgroundColor = "grey";
}
function mouseDblClick() {
    document.getElementById("circle").style.backgroundColor = "blue";
}
function mouseOver() {
    document.getElementById("circlep").innerHTML = "You are in the circle";
}
function mouseOut() {
    document.getElementById("circlep").innerHTML = "You are outside of the circle";
}

