'use strict';

const inputs = document.querySelectorAll('.main-form__input-text');
var mainFormInputTextEmailSvg = document.querySelector('.main-form__input-text-email');
var mainFormInputTextTelSvg = document.querySelector('.main-form__input-text-tel');

var inputRequired = document.querySelectorAll('input:required');
var mainFormBtn = document.querySelector('.main-form__btn');

//при клике не работает добавление класса с 11 по 27 строчку.
inputs.forEach(function(item) {
  item.addEventListener('change', function () {
    if(!item.checkValidity()) {
      item.style.outline = "2px solid #ff8282";
      if (this.name === "email") {
        mainFormInputTextEmailSvg.classList.add('main-form__input-text-svg-error');
      } else if (this.name === "telephone") {
        mainFormInputTextTelSvg.classList.add('main-form__input-text-svg-error');
      }
    } else {
      item.style.outline = "1px solid #e6e6e6";
      if (this.name === "email") {
      } else if (this.name === "telephone") {
      }
    }
  });
});

mainFormBtn.addEventListener('click', function() {
  inputRequired.forEach(function(item) {
      if(item.value === '') {
        item.style.outline = "2px solid #ff8282";
      } else {
        item.style.outline = "1px solid #e6e6e6";
      }
  });
});
