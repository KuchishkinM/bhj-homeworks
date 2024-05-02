const holes = document.querySelectorAll('div.hole');

for (let i = 0; i < holes.length; i++) {
    holes[i].addEventListener("click", moleKiller);
};

function moleKiller() {
    const dead = document.getElementById("dead");
    const lost = document.getElementById("lost");
    if (this.className == "hole hole_has-mole") {
        dead.textContent++;
    } else {
        lost.textContent++;
    };

    if (dead.textContent == 10) {
        theEnd('Вы выиграли!!!');
    };

    if (lost.textContent == 5) {
        theEnd('Вы проиграли =(');
    };

    function theEnd(message) {
        alert(message)
        dead.textContent = 0;
        lost.textContent = 0;
    };
}
