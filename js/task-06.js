// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
document.querySelector('body').style.backgroundColor = '#FFDAB9';
const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {
  const inputDataLength = Number(validationInput.dataset.length);
  const inputValueLength = Number(event.currentTarget.value.length);
  console.log(inputDataLength);
  console.log(inputValueLength);
  if (inputDataLength === inputValueLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
}
