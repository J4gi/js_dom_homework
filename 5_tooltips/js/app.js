document.addEventListener('DOMContentLoaded', function() {

const tooltips = document.querySelectorAll('.tooltip');

for (let tooltip of tooltips) {
  tooltip.addEventListener('mouseover', function(){
    const newSpan = document.createElement('span');
    newSpan.className = 'tooltipText';
    newSpan.innerText = this.dataset.text;
    this.appendChild(newSpan);
  });

  tooltip.addEventListener('mouseout', function(){
    this.removeChild(this.lastChild);
  });
}

});
