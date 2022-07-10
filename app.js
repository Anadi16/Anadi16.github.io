const button = document.getElementById("btn");
const text = document.getElementById("text2")
const colors = ["red", "yellow", "green", "aqua"];
button.style.backgroundColor = "green";

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);

}

button.addEventListener("click", function () {
    let number = getRandomNumber();
    document.body.style.backgroundColor = colors[number];
    text.textContent = colors[number]
    button.style.backgroundColor = colors[number]
})