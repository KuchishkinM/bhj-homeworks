const loader = document.getElementById('loader')
const itemsDiv = document.getElementById('items')

let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active')
    itemsLoader(xhr.responseText);
  }
});

function itemsLoader(responseText) {
  const text = JSON.parse(responseText)
  const valutes = text.response.Valute
  let storage = ''
  for (item in valutes) {
    let text = `<div class="item__code">${valutes[item]['CharCode']}</div><div class="item__value">${valutes[item]['Value']}</div><div class="item__currency">руб.</div>`
    storage += text
  }
  itemsDiv.innerHTML = storage
};