function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body >
//  через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const refs = {
  body: document.querySelector('body'),
  widget: document.querySelector('.widget'),
  color: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
};

refs.changeColorBtn.addEventListener('click', onChangeColorBtnClick);
function onChangeColorBtnClick() {
  refs.color.textContent = refs.body.style.backgroundColor =
    getRandomHexColor();
}
