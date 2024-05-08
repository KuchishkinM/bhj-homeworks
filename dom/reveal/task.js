const reveal = document.querySelector('div.reveal');
const viewportHeight = window.innerHeight;
const revalTop = reveal.getBoundingClientRect().top;

if (viewportHeight > revalTop) {
    reveal.classList.add('reveal_active')
};


