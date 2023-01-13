const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const createdLi = document.createElement('li');
console.log(createdLi);

for (const ingredient of ingredients) {
  // console.log(ingredient);
  const createdLi = document.createElement('li');
  createdLi.textContent = ingredient;
  createdLi.classList.add('item');
  listEl.appendChild(createdLi);
}