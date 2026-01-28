import _ from 'underscore';
import { createCard, createDeck, takeCard, valueCard, turnComputer } from './usecases';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let pointsPlayer = 0, puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

// Esta función crea un nuevo deck
deck = createDeck(types, specials);

// Eventos
btnPedir.addEventListener('click', () => {

  const card = takeCard(deck);

  pointsPlayer = pointsPlayer + valueCard(card);
  puntosHTML[0].innerText = pointsPlayer;

  const imgCarta = createCard(card);
  divCartasJugador.append(imgCarta);

  if (pointsPlayer > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnComputer(pointsPlayer, puntosHTML[1], divCartasComputadora, deck);

  } else if (pointsPlayer === 21) {
    console.warn('21, genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnComputer(pointsPlayer, puntosHTML[1], divCartasComputadora, deck);
  }

});


btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnComputer(pointsPlayer, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {

  console.clear();
  deck = [];
  deck = createDeck(types, specials);

  pointsPlayer = 0;
  puntosComputadora = 0;

  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;

  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';

  btnPedir.disabled = false;
  btnDetener.disabled = false;

});
