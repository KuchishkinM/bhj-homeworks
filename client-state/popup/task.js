const modal = document.getElementById('subscribe-modal');
const button = document.querySelector('.modal__close');

button.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modal=close';
});

const checkCookie = () => {
  if (!document.cookie.match(/close/)) {
    modal.classList.add('modal_active');
  };
};

document.onload = checkCookie();