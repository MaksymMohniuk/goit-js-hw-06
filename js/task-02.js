const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const arr = [];

for (const ingredient of ingredients) {
  const createdLi = document.createElement('li');
  createdLi.classList.add('item');
  createdLi.textContent = ingredient;

  arr.push(createdLi);
}
listEl.append(...arr); 


// const foodItems = ingredients.map(ingredient => {
//   const createdLi = document.createElement('li');
//     createdLi.textContent = ingredient;
//     createdLi.classList.add('item');
//     return createdLi;
// })

// listEl.append(...foodItems); 