const buttons = Array.from(document.querySelectorAll('[data-add-shape]'));

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.dataset.addShape == 'circle') {
    }
  });
});
