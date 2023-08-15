document.querySelector('body').style.backgroundColor = '#00ff00';

const categoriesEl = document.querySelector('#categories');

const categoryLength = categoriesEl.children.length;
console.log(`Number of categories: ${categoryLength}`);

const itemElement = document.querySelectorAll('.item');
itemElement.forEach(item => {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.children.length);
});
