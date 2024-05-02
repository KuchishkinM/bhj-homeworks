const timerRun = function () {
    const timerValue = document.getElementById("timer");
    timerValue.textContent--;
    if (timerValue.textContent == 0) {
        alert('Вы победили в конкурсе')
        clearInterval(interval)
    }
}
const interval = setInterval(timerRun, 1000)