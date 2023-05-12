// obtenemos todos los divs con la clase "brand--card--grid"
const cards = document.querySelectorAll('.brand--card--grid');

// ponemos el fondo negro en el primer div
cards[0].style.backgroundColor = 'black';

// agregamos un event listener a cada div
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // retiramos el fondo negro de todos los divs
    cards.forEach(card => {
      card.style.backgroundColor = '';
    });
    // ponemos el fondo negro en el div clickeado
    card.style.backgroundColor = 'black';
  });
});
