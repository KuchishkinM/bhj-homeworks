const textArea = document.getElementById('editor');
const clearButton = document.getElementById('clear__button');

textArea.addEventListener('input', () => {
  localStorage.setItem('text', textArea.value)
})

textArea.value = localStorage.getItem('text');

clearButton.addEventListener('click', () => {
  textArea.value = ''
  delete localStorage.clear();
});