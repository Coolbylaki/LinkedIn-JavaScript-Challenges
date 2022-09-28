function changeBodyColor(color) {
    return function () {
        document.body.style.backgroundColor = `${color}`;
    };
}

const bgColorBlue = changeBodyColor("blue");
const bgColorPink = changeBodyColor("pink");
const bgColorGreen = changeBodyColor("green");

document
    .querySelector("#blue")
    .addEventListener("click", bgColorBlue);
document
    .querySelector("#pink")
    .addEventListener("click", bgColorPink);
document
    .querySelector("#green")
    .addEventListener("click", bgColorGreen);