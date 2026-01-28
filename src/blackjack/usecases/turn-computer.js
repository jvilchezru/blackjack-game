import { createCard, takeCard, valueCard } from "./";

/**
 * 
 * @param {Number} minimunPoints puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} pointsHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divComputerCards elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */

export const turnComputer = (minimunPoints, pointsHTML, divComputerCards, deck = []) => {
  if (!minimunPoints) throw new Error('Los puntos mínimos son necesarios');

  let computerPoints = 0;

  do {
    const card = takeCard(deck);

    computerPoints = computerPoints + valueCard(card);
    pointsHTML.innerText = computerPoints;

    const imgCarta = createCard(card);
    divComputerCards.append(imgCarta);

    if (minimunPoints > 21) {
      break;
    }

  } while ((computerPoints < minimunPoints) && (minimunPoints <= 21));
  setTimeout(() => {
    if (computerPoints === minimunPoints) {
      alert('Nadie gana :(');
    } else if (minimunPoints > 21) {
      alert('Computadora gana')
    } else if (computerPoints > 21) {
      alert('Jugador Gana');
    } else {
      alert('Computadora Gana')
    }
  }, 100);
}