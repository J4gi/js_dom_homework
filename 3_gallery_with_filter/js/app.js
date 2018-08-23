document.addEventListener('DOMContentLoaded', function(){

const images = document.querySelectorAll('img');
const hideButton = document.querySelector('#hideButton');
const showButton = document.querySelector('#showButton');
const tagInput = document.querySelector('#tagInput');
let inputValue = '';
hideButton.addEventListener('click', function(){
  //console.log(tagInput.value);
  inputValue = tagInput.value;
  tagInput.value = '';
  for (let image of images ) {
    console.log(image.dataset.tag);
  }

});
showButton.addEventListener('click', function(){
  inputValue = tagInput.value;
  tagInput.value = '';
  console.log(inputValue);
});



});
