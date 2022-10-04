const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');

const listItemEl = images.map(image => 
  `<li><img src='${image.url}' alt='${image.alt}'></li>`).join(''); 

listEl.insertAdjacentHTML("afterbegin", listItemEl); 

listEl.style.listStyle = 'none';
listEl.style.display = 'flex';
listEl.style.padding = '0';
listEl.style.gap = '10px';
listEl.style.justifyContent = 'center';
listEl.style.alignItems = 'center';

const imagesEl = document.querySelectorAll('li > img');

imagesEl[0].style.width = '200px';
imagesEl[1].style.width = '250px';
imagesEl[2].style.width = '350px';



