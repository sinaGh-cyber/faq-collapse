const buttons = document.querySelectorAll('button');
const toggler = (button) => {
  button.parentNode.classList.toggle('active');
};

buttons.forEach((button) => {
  button.addEventListener('click', toggler.bind(null, button));
});
