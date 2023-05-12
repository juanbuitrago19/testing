const slider = document.querySelector('.slider-inner');
const progressBar = document.querySelector('.prog-bar-inner-2');

let sliderGrabbed = false;

slider.parentElement.addEventListener('scroll', (e) => {
    progressBar.style.width  = `${getScrollPercentage()}%`
})


function getScrollPercentage(){
   return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
}