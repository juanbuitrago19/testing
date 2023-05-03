const menuItems = document.querySelectorAll('.menu-item');
const selectedItem = document.querySelector('.selected');
const menuWidth = document.getElementById('slider-menu').offsetWidth; 
const selectedWidth = selectedItem.offsetWidth;
const midPoint = (menuWidth / 2);
const moveDistance = (midPoint - selectedWidth);
let calcPosition = 0;
menuItems.forEach(item => {
  if (item.hasAttribute('aria-selected')) {
    document.getElementById('slider-menu').style.transform = `translateX(-${calcPosition}px)`;
  } else {
    calcPosition += item.offsetWidth;
  }
});