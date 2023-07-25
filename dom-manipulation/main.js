let clicks = 0;

const hotButton = document.querySelector('.hot-button');
const clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', function (event) {
  clicks++;
  if (clicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'nuclear!';
  }

  console.log(`Button clicked ${clicks} times.`);
  clickCount.textContent = 'clicks: ' + clicks;
});
