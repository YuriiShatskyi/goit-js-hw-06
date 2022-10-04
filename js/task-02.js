const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = item;

  return listItem;
});

ingredientsListEl.append(...ingredientsEl);