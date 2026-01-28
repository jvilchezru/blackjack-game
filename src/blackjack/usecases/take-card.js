/**
 * 
 * @param {Array<string>} deck 
 * @returns {String} retorna una carta
 */

export const takeCard = (deck) => {

  if (!deck || deck.length === 0) {
    throw new Error('No hay cartas en el deck');
  }
  const card = deck.pop();
  return card;
}