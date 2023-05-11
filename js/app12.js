// Obtener todos los elementos li con la clase "brand__element"
var brandElements = document.querySelectorAll('.brand__element');

// Iterar sobre cada elemento li
brandElements.forEach(function(element) {
  // Obtener el enlace "Ver todo" dentro del elemento li actual
  var link = element.querySelector('a.cta__view__page');

  // Agregar un evento de escucha para el evento de hover
  element.addEventListener('mouseover', function() {
    // Agregar la clase "hover-line" al enlace "Ver todo"
    link.classList.add('hover-line');
  });

  // Agregar un evento de escucha para el evento de dejar de hacer hover
  element.addEventListener('mouseout', function() {
    // Eliminar la clase "hover-line" del enlace "Ver todo"
    link.classList.remove('hover-line');
  });
});


// Obtener todos los elementos li con la clase "brand__element"
var brandElements2 = document.querySelectorAll('.brand--card--grid');

// Iterar sobre cada elemento li
brandElements2.forEach(function(element) {
  // Obtener el enlace "Ver todo" dentro del elemento li actual
  var link = element.querySelector('.cta__view__page_2');

  // Agregar un evento de escucha para el evento de hover
  element.addEventListener('mouseover', function() {
    // Agregar la clase "hover-line" al enlace "Ver todo"
    link.classList.add('hover-line');
  });

  // Agregar un evento de escucha para el evento de dejar de hacer hover
  element.addEventListener('mouseout', function() {
    // Eliminar la clase "hover-line" del enlace "Ver todo"
    link.classList.remove('hover-line');
  });
});
