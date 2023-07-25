const $lightBulb = document.querySelector('.bulb');
const $bodyColor = document.querySelector('body');

let isBulbOn = true;

$lightBulb.addEventListener('click', function (event) {
  isBulbOn = !isBulbOn;
  if (isBulbOn) {
    $lightBulb.className = 'bulb off';
    $bodyColor.className = 'body dark';
  } else {
    $lightBulb.className = 'bulb on';
    $bodyColor.className = 'body';
  }
});
