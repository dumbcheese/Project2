

var numSquares = 6;
var colors = generateColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click", function () {
        var squareColor = this.style.backgroundColor;

        if (squareColor === pickedColor) {
            h1.style.background = pickedColor;
            message.textContent = "Correct!"
            changeColors(squareColor);
            resetButton.textContent = "Play Again?";

        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!"
        }
    });
}

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    resetButton.textContent = "New Colors";
    colors = generateColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < square.length; i++) {

        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function () {
    h1.style.background = "steelblue";
    message.textContent= "  ";
    resetButton.textContent = "New Colors";
    colors = generateColors(numSquares);

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