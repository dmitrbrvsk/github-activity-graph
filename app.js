window.addEventListener('DOMContentLoaded', function() {
  const squares = document.querySelector('#js-squares');

  for (var i = 1; i < 365; i++) {
    const level = Math.floor(Math.random() * 3);
    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
  }
}, false)