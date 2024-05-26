const input = document.getElementById('task__input')
const form = document.getElementById('tasks__form')
const div = document.getElementById('tasks__list')

form.addEventListener('submit', (e) => {
  div.insertAdjacentHTML('afterBegin', `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a>`)
  e.preventDefault();
  e.target.reset();
  const removes = document.getElementsByClassName('task__remove')
  const tasks = document.querySelectorAll('.task')
  for (let i = 0; i < removes.length; i++) {
    removes[i].addEventListener('click', (e) => {
      tasks[i].remove();
    });
  };
});