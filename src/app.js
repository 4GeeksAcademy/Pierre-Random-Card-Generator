/* eslint-disable */
// import "bootstrap";
import './style.css';

import './assets/img/spades.svg';
import './assets/img/hearts.svg';
import './assets/img/diamond.svg';
import './assets/img/spades.svg';

const cards = ['./spades.svg', './hearts.svg', './diamond.svg', './spades.svg'];

const cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

const cardNumber = document.querySelector('.card-number');
const cardContainer = document.querySelector('.card-container');
const topImage = document.querySelector('.top-img');
const bottomImage = document.querySelector('.bottom-img');
const changeCardButton = document.querySelector('.change-card');
const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');

const generateRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateRandomCards = () => {
  topImage.src = generateRandomElement(cards);
  bottomImage.src = topImage.src;
  cardNumber.innerHTML = generateRandomElement(cardNumbers);
};

const changeWidth = (e) => {
  cardContainer.style.width = `${e.target.value}px`;
};

const changeHeight = (e) => {
  cardContainer.style.height = `${e.target.value}px`;
};

window.onload = function() {
  //write your code here
  generateRandomCards();
};

changeCardButton.addEventListener('click', generateRandomCards);

widthInput.addEventListener('input', (e) => {
  changeWidth(e);
});

heightInput.addEventListener('input', (e) => {
  changeHeight(e);
});

setInterval(() => {
  generateRandomCards();
  console.log('10 secs passed');
}, 10000);
