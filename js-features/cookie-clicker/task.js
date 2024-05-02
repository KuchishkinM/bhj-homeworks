const cookieImg = document.getElementById("cookie");
const clickCount = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("speed__value");
let lastDate = Date.now();

const counterPlus = function () {
    clickCount.textContent++;
    if (cookieImg.width == 200) {
        cookieImg.width = 170
    } else {
        cookieImg.width = 200
    }
    clickSpeed.textContent = (1000 / (Date.now() - lastDate)).toFixed(2);
    lastDate = Date.now();
};

cookieImg.onclick = counterPlus
