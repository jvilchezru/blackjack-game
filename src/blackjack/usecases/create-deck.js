import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} typesCards Ejemplo: ['C','D','H','S']
 * @param {Array<string>} typesEspecials Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const createDeck = (typesCards, typesEspecials) => {
  if (!typesCards || typesCards.length === 0)
    throw new Error('typesCards es obligatorio como un arreglo de string');

  if (!typesEspecials || typesEspecials.length === 0)
    throw new Error('typesEspecials es obligatorio como un arreglo de string');

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let type of typesCards) {
      deck.push(i + type);
    }
  }

  for (let type of typesCards) {
    for (let esp of typesEspecials) {
      deck.push(esp + type);
    }
  }

  deck = _.shuffle(deck);
  return deck;
}
