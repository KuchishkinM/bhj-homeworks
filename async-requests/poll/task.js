const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');


xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loader(xhr.responseText);
  }
});

function loader(responseText) {
  const text = JSON.parse(responseText)
  pollTitle.textContent = text.data['title']
  const answers = text.data['answers']
  let storage = ''
  for (answer in answers) {
    let text = `<button class="poll__answer">${answers[answer]}</button>`
    storage += text
  }
  pollAnswers.innerHTML = storage

  const btn = document.querySelectorAll('.poll__answer')
  
  btn.forEach((item) => {
    item.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
    })
  });
}
xhr.send();