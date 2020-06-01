// get random

// seenCards: []  endOfDeck: boolean (false)   currentCard: {}

export function getRandomCard(currentCards) {
  return {
    type: 'GET_RANDOM_CARD',
    currentCards: currentCards,
  }
}

