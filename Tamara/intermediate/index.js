const generator = document.getElementById("colorbtn");

function random_bg_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    console.log(bgColor);
    document.body.style.background = bgColor;
}
generator.addEventListener("click", random_bg_color);