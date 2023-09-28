"use strict"
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const input = document.querySelector('.form__email');
const errorImg = document.querySelector('.form__error');
const formBtn = document.querySelector('.form__btn');
const errorText = document.querySelector('.text__error');
const form = document.querySelector('.form');

function onInput(e) {
  if (isEmailValid(input.value)) {
    input.style.borderColor = 'green';
		errorText.innerHTML = '';
		errorImg.style.display = '';
  } else {
    input.style.borderColor = 'red';
		errorImg.style.display = 'block';
		errorText.innerHTML = 'Please provide a valid email';
  }
}

input.addEventListener('input', onInput);

function isEmailValid(value) {
return EMAIL_REGEXP.test(value);}

form.addEventListener('submit', function(e) {
	if(!isEmailValid(input.value)) {
		e.preventDefault();
	}
})