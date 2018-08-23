document.addEventListener("DOMContentLoaded", function(){

//console.log('działa');
const lis = document.querySelectorAll('li');
const body = document.querySelector('body');
// console.log(lis[0]);
// console.log(body);

lis.forEach(function(li){

  //adding evenListener to every picture
  li.addEventListener('click', function(){
    let newDiv = document.createElement('div');

    //adding new Div and elements inside it
    newDiv.className = 'fullScreen';
    let newImg = document.createElement('img');
    newImg.src = this.firstChild.src;
    let newButton = document.createElement('button');
    newButton.className = 'close';
    newButton.innerText = 'Close';

    //appending elements to div and div to site
    newDiv.appendChild(newImg);
    newDiv.appendChild(newButton);
    body.appendChild(newDiv);

    //removing div from the site
    newButton.addEventListener('click', function(){
      body.removeChild(newDiv);
    });
  }); //lis.eventlistener callback function
}); //lis.forEach callback function


});
