const listaMarcas = document.querySelector(".marca-lista");
const btnVerMas = document.querySelector(".btn-ver-mas");
const btnVerMenos = document.querySelector(".btn-ver-menos");
const cantidadMarcas = listaMarcas.children.length;

// Obtener todos los elementos <li> dentro del <ul>
var elementosMarcas = listaMarcas.querySelectorAll("li");

// Iterar sobre cada elemento <li>
elementosMarcas.forEach(function(elemento, indice) {
  // Si el índice es mayor o igual a 3, agregar la clase "hidden"
  if (indice >= 5) {
    elemento.classList.add("hidden");
  }
});




// Agregar un evento de clic al botón "Ver más"
btnVerMas.addEventListener("click", function() {
  // Iterar sobre cada elemento <li> desde el cuarto elemento
  for (var i = 5; i < elementosMarcas.length; i++) {
    // Eliminar la clase "hidden"
    elementosMarcas[i].classList.remove("hidden");
  }

  // Ocultar el botón "Ver más" y mostrar el botón "Ver menos"
  btnVerMas.classList.add("hidden-2");
  btnVerMenos.classList.remove("hidden-2");
});

// Agregar un evento de clic al botón "Ver menos"
btnVerMenos.addEventListener("click", function() {
  // Iterar sobre cada elemento <li> desde el cuarto elemento
  for (var i = 5; i < elementosMarcas.length; i++) {
    // Agregar la clase "hidden"
    elementosMarcas[i].classList.add("hidden");
  }

  // Ocultar el botón "Ver menos" y mostrar el botón "Ver más"
  btnVerMenos.classList.add("hidden-2");
  btnVerMas.classList.remove("hidden-2");
});
