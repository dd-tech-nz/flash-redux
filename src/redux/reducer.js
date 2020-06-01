import CARD_DATA from '../components/card.data'

const INITIAL_STATE = {
  cards: CARD_DATA,
  randomCard: {},
  seenCard: [],
  endOfDeck: false
}

const cardReducer = function cards(state = INITIAL_STATE, action) {
 
  switch (action.type) {
    case 'GET_RANDOM_CARD': 
      return {
        ...state,
        randomCard: [action.currentCards[Math.floor((Math.random() * action.currentCards.length))]]
      }
      
    default: return state
  }
}

  
export default cardReducer