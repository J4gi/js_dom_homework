document.addEventListener('DOMContentLoaded', function(){

const images = document.querySelectorAll('img');
const hideButton = document.querySelector('#hideButton');
const showButton = document.querySelector('#showButton');
const tagInput = document.querySelector('#tagInput');
let inputValue = '';

hideButton.addEventListener('click', function(){
  inputValue = tagInput.value;
  tagInput.value = '';
  for (let image of images ) {
    if (image.dataset.tag.includes(inputValue)) {
      image.classList.add('invisible');
    }
  }

});
showButton.addEventListener('click', function(){
  inputValue = tagInput.value;
  tagInput.value = '';
  for (let image of images ) {
    if (image.dataset.tag.includes(inputValue)) {
      image.classList.remove('invisible');
    }
  }
});



});
