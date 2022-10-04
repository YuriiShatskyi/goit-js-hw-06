console.log('Hello js! ;)');



const numberOfCategoriesList = document.querySelector('#categories').children.length; 
console.log(`Number of categories: ${numberOfCategoriesList}`);

const listEl = document.querySelectorAll('ul > .item');

const titlesEl = document.querySelectorAll('.item > h2'); 

const itemsEl = document.querySelectorAll('.item > ul');


for (let i = 0; i < listEl.length; i+= 1) {

const CategoryName = titlesEl[i].textContent;
const ElementsQuantity = itemsEl[i].children.length;

console.log(`Category: ${CategoryName}`); 
console.log(`Elements: ${ElementsQuantity}`); 
};


















