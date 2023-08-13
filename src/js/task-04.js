// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


document.querySelector('body').style.backgroundColor = '#FF00FF';


let counterValue = 0;
const refs ={
    valueEl: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]')
}
refs.decrementBtn.addEventListener('click', onDecrementBtnClick)
refs.incrementBtn.addEventListener('click', onIncrementBtnClick)

function onDecrementBtnClick(){
    counterValue -=1;
    refs.valueEl.textContent = counterValue;
}
function onIncrementBtnClick() {
    counterValue +=1;
    refs.valueEl.textContent = counterValue;
}
