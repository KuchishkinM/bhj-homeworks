const tooltips = document.querySelectorAll(`.has-tooltip`);

for (let i = 0; i < tooltips.length; i++) {
  tooltips[i].insertAdjacentHTML(`afterEnd`, `<div class="tooltip">${tooltips[i].title}</div>`);

  tooltips[i].addEventListener(`click`, (e) => {
    e.preventDefault();

    const tooltipList = document.querySelectorAll(`.tooltip`);

    if (tooltipList[i].classList.contains(`tooltip_active`)) {
      tooltipList[i].classList.remove(`tooltip_active`);
    } else {
      tooltipList[i].classList.add(`tooltip_active`);

      let place = tooltips[i].getBoundingClientRect();

      tooltipList[i].style.top = `${place.top + 20}px`;
      tooltipList[i].style.left = `${place.left}px`;
    }
  })
};
