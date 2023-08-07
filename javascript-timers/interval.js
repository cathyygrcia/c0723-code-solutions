document.addEventListener('DOMContentLoaded', function () {
  const $headingElement = document.querySelector('.countdown-display');

  let countdown = 4;

  function updateHeading() {
    if (countdown > 0) {
      $headingElement.textContent = countdown;
      countdown--;
    } else {
      $headingElement.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(interval);
    }
  }

  const interval = setInterval(updateHeading, 1000);
});
