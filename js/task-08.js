// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде
// ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

document.querySelector('body').style.backgroundColor = '#6b8e23';

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();
  //   console.dir(event.currentTarget.elements.email);
  //   console.dir(event.currentTarget.elements.password);

  const {
    email: { value: email },
    password: { value: password },
  } = event.currentTarget.elements;
  //   console.log(email);
  //   console.log(password);
  if (!email || !password) {
    alert('Всі поля повинні бути заповнені');
    return;
  }
  const info = { email, password };
  console.log(info);
  event.currentTarget.reset();
}
