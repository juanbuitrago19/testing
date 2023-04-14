// Get the elements with the .menu-item and .selected classes
const menuItems = document.querySelectorAll('.menu-item');
const selectedItem = document.querySelector('.selected');

// Get the width of the menu 
const menuWidth = document.getElementById('slider-menu').offsetWidth; 

// Get the width of the selected element
const selectedWidth = selectedItem.offsetWidth;

// Get the midpoint of the menu
const midPoint = (menuWidth / 2);

// Calculate the distance to move the menu 
const moveDistance = (midPoint - selectedWidth);

// Calculate the position of the selected element 
let calcPosition = 0;

// Move to the selected item
menuItems.forEach(item => {
  if (item.hasAttribute('aria-selected')) {
    document.getElementById('slider-menu').style.transform = `translateX(-${calcPosition}px)`;
  } else {
    calcPosition += item.offsetWidth;
  }
});