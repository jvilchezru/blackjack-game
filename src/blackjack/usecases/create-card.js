/**
 * 
 * @param {String} card 
 * @returns {HTMLElement} retorna imagen de la carta
 */

export const createCard = (card) => {
  if (!card) throw new Error('La carta es obligatoria');

  const imgCarta = document.createElement('img');
  imgCarta.src = `./cards/${card}.png`; //3H, JD
  imgCarta.classList.add('carta');
  return imgCarta;
}


