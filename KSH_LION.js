'use strict';

const loginCheckBtn = document.querySelector('.login__check-btn');
const loginCheckImg = document.querySelector('#login__check-img');

loginCheckBtn.addEventListener('click', () => {
  loginCheckImg.classList.toggle('invisible');
});
