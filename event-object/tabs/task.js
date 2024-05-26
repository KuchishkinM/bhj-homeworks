const tabs = Array.from(document.getElementsByClassName('tab'));
const contents = Array.from(document.getElementsByClassName('tab__content'));

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let index = tabs.indexOf(tab)
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("tab_active");
        };
        tab.classList.add('tab_active');
        for (let j = 0; j < contents.length; j++) {
            contents[j].classList.remove('tab__content_active')
        };
        contents[index].classList.add('tab__content_active');
    });
});