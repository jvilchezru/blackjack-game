/**
 * 
 * @param {String} card 
 * @returns {Number} retorna el valor de la carta
 */

export const valueCard = (card) => {
  const value = card.substring(0, card.length - 1);
  return (isNaN(value)) ?
    (value === 'A') ? 11 : 10
    : value * 1;
}