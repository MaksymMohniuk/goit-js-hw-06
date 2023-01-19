function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('#controls input');
console.log(input);
const btnCreate = document.querySelector('#controls button[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('#controls button[data-destroy]');
console.log(btnDestroy);
const container = document.getElementById('boxes');
console.log(container);


