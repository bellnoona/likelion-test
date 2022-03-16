'use strict';

const loginCheckBtn = document.querySelector('.login__check-btn');
const loginCheckImg = document.querySelector('#login__check-img');

loginCheckBtn.addEventListener('click', (e) => {
  const type = e.target.dataset.type;
  if (type === 'empty') {
    loginCheckImg.classList.remove('invisible');
  } else {
    loginCheckImg.classList.add('invisible');
  }
});
