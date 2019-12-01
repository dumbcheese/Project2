

var numSquares = 6;
var colors = generateColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click", function () {
        var squareColor = this.style.backgroundColor;

        if (squareColor === pickedColor) {
            h1.style.background = pickedColor;
            message.textContent = "Correct!"
            resetButton.textContent = "Play Again?";

        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!"
        }
    });
}


resetButton.addEventListener("click", function () {
    h1.style.background = "steelblue";
    message.textContent= "  ";
    resetButton.textContent = "New Colors";
    colors = generateColors(6);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
    }
})


function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function changeColors(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}

function generateColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var oneColor = "rgb(" + r + ", " + g + ", " + b + ")";
    return oneColor;
}