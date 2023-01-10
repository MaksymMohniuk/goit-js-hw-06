const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createdLi = document.createElement('li');
console.log(createdLi);

for (const ingredient of ingredients) {
  const createdLi = document.createElement('li');
  createdLi.textContent = ingredient;
  
}