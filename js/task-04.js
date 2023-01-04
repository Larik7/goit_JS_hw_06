const count = document.querySelector('#value');

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonIncrement.addEventListener('click', add);
buttonDecrement.addEventListener('click', remove);

let counterValue = 0;

function add() {
  counterValue += 1;
  count.textContent = counterValue;
}
function remove() {
  counterValue -= 1;
  count.textContent = counterValue;
}