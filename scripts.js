// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

const input1 = document.querySelector('input');
const ul = document.querySelector('ul');

input1.onkeydown = function(event) {
  const li = document.createElement('li');
  li.innerText = event.key;
  ul.appendChild(li);
  console.log(event.key);
}


// // Задание 2
// // Вставить в html теги input и div (просто предусмотреть в разметке).
// // Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

// const input2 = document.querySelector('input');
// const ul = document.querySelector('ul');

// input2.addEventListener('keyup', function() {
//   let li = document.createElement('li');
//   li.innerText = input2.value;
//   ul.appendChild(li);
// });


// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

// const ul = document.querySelector('.main');
// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const input = form.querySelector('#main');
//   const li = document.createElement('li');
//   li.innerText = input.value;
//   ul.appendChild(li);
//   input.value = '';
// })


// Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div.

// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)

const firstNumber = document.querySelector('.firstNum');
const secondNumber = document.querySelector('.secNum');
const arifmetikSimbols = document.querySelector('select');
const form = document.querySelector('.secondform');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(eval(firstNumber.value + arifmetikSimbols.value + secondNumber.value));
  firstNumber.value = '';
  secondNumber.value = '';
});


const firNum = document.querySelector('.firstNum');
const secNum = document.querySelector('.secNum');
const arifSimbols = document.querySelector('select');
const form2 = document.querySelector('.secondform');
const div = document.querySelector('div');
const p = document.createElement('p');
let result2 = 0;

form2.addEventListener('submit', (event) => {
  event.preventDefault();
  if (arifSimbols.value == '+') {
    result2 = +firNum.value + +secNum.value;
  } else if (arifSimbols.value == '-') {
    result2 = +firNum.value - +secNum.value;
  } else if (arifSimbols.value == ':') {
    result2 = +firNum.value / +secNum.value;
  } else if (arifSimbols.value == '*') {
    result2 = +firNum.value * +secNum.value;
  };
  console.log(result2)
  p.innerText = result2;
  div.appendChild(p);
  firNum.value = '';
  secNum.value = '';
})


// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

const button = document.querySelector('button');

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

button.onmouseenter = function() {
  button.style.background = `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`;
}

button.onmouseleave = function() {
  button.style.transform = `rotate(${getRandomInteger(-180, 180)}deg)`;
}