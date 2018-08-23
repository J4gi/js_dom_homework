document.addEventListener('DOMContentLoaded', function() {
  console.log('działa');

  const mainlis = document.querySelectorAll('.nav>ul>li');

  for (let mainli of mainlis) {
    mainli.addEventListener('mouseover', function(){
      if (mainli.querySelector('ul')) {
        mainli.querySelector('ul').style.display = 'block';
      }

    });
    mainli.addEventListener('mouseout', function(){
      if (mainli.querySelector('ul')) {
        mainli.querySelector('ul').style.display = 'none';
      }
    });
  }
});
