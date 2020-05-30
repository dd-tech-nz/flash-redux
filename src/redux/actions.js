// get random

export function getRandomCard(currentCards) {
  return {
    type: 'GET_RANDOM_CARD',
    currentCards: currentCards,
  }
}

