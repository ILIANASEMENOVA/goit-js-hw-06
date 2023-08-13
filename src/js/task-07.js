// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

document.querySelector('body').style.backgroundColor = '#00FFFF';
const refs = {
  fontSizeControl: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};
refs.text.style.fontSize = refs.fontSizeControl.value + 'px';
refs.fontSizeControl.addEventListener('input', onfontSizeControlInput);

function onfontSizeControlInput(event) {
  refs.text.style.fontSize = refs.fontSizeControl.value + 'px';
  refs.text.textContent = 'have a good day';
}
