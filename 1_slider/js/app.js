//1
document.addEventListener('DOMContentLoaded', function() {
//2
const nextButton = document.querySelector('#nextPicture');
const prevButton = document.querySelector('#prevPicture');
const listElements = document.querySelectorAll('li');
let pictureIndex = 0;
let liClass=listElements[pictureIndex].className;
//console.log(listElements[pictureIndex]);

//3
listElements[pictureIndex].classList.add('visible');
console.log(listElements[pictureIndex]);

//4
nextButton.addEventListener('click', function() {
//5
  listElements[pictureIndex].classList.remove('visible');
//8
  if (pictureIndex===listElements.length-1) {
    pictureIndex=0;
  }else{
    pictureIndex++;
  }
  listElements[pictureIndex].classList.add('visible');
});

prevButton.addEventListener('click', function() {
//6
  listElements[pictureIndex].classList.remove('visible');
//8
  if (pictureIndex===0) {
    pictureIndex=listElements.length-1;
  }else{
    pictureIndex--;
  }
  listElements[pictureIndex].classList.add('visible');
});


});
