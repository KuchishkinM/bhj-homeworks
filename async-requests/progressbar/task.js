const progress = document.getElementById('progress');
// progress.value = 0.6;
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const request = new XMLHttpRequest();
  request.upload.addEventListener("progress", uploadProgress, false);

  function uploadProgress(event) {
      const complete = event.loaded / event.total;
      progress.value = complete;

  }
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  request.send(formData);
});