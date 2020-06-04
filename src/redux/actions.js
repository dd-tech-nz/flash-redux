// get random

// seenCards: []  endOfDeck: boolean (false)   currentCard: {}

// export function getRandomCard(currentCards) {
//   return {
//     type: 'GET_RANDOM_CARD',
//     currentCards: currentCards
//   }
// }
export function updateDeck(card) {
  return {
    type: 'UPDATE_DECK',
    card: card
  }
}

// export function addSeenCard(randomCard) {
//   return {
//     type: 'ADD_SEEN_CARD',
//     randomCard: randomCard
//   }
// }

export function setEndOfDeck(eod) {
  return {
    type: 'TOGGLE_END_OF_DECK',
    eod: eod
  }
}