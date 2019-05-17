'use strict';

const inputs = document.querySelectorAll('.main-form__input-text');
var mainFormInputTextEmailSvg = document.querySelector('.main-form__input-text--email');
var mainFormInputTextTelSvg = document.querySelector('.main-form__input-text--tel');

inputs.forEach(function(item) {
  item.addEventListener('change', function (e) {
    if(!item.checkValidity()) {
      item.style.outline = "2px solid #ff8282";
      if (this.name === "email") {
        mainFormInputTextEmailSvg.style.fill = "#ff8282";
      } else if (this.name === "telephone") {
        mainFormInputTextTelSvg.style.fill = "#ff8282";
      }
    } else {
      item.style.outline = "1px solid #e6e6e6";
      if (this.name === "email") {
        mainFormInputTextEmailSvg.style.fill = "#000000";
      } else if (this.name === "telephone") {
        mainFormInputTextTelSvg.style.fill = "#000000";
      }
    }
  });
});
