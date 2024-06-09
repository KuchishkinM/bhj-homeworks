const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const button = document.getElementById('signin__btn');
const signin = document.getElementById('signin');

if (localStorage.getItem('id')) {
  welcomePopup();
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.responseType = 'json';
  xhr.send(new FormData(form));

  xhr.onload = () => {
      if (xhr.response.success) {
          localStorage.setItem('id', xhr.response.user_id);
          welcomePopup();
      } else {
          alert('Неверный логин или пароль');
          form.reset();
      }
  }
});

function welcomePopup() {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  document.getElementById('user_id').innerHTML = localStorage.id;
};