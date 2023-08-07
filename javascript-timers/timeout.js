document.addEventListener('DOMContentLoaded', function greeting() {
  const heading = document.querySelector('.message');

  setTimeout(function greeting() {
    heading.textContent = 'Hello There';
  }, 2000);
});
