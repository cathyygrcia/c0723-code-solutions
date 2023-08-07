const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleViewSwap);

function handleViewSwap(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (let i = 0; i < $tab.length; i++) {
    if ($tab[i] === event.target) {
      $tab[i].className = 'tab active';
    } else {
      $tab[i].className = 'tab';
    }
  }

  const viewName = event.target.getAttribute('data-view');

  for (let j = 0; j < $views.length; j++) {
    if ($views[j].getAttribute('data-view') !== viewName) {
      $views[j].className = 'view hidden';
    } else {
      $views[j].className = 'view';
    }
  }
}
