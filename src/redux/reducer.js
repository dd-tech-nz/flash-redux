import CARD_DATA from '../components/card.data'

const INITIAL_STATE = {
  cards: CARD_DATA,
  availableCards: CARD_DATA,
  // randomCard: {},
  // seenCards: [],
  endOfDeck: false
}

const cardReducer = function cards(state = INITIAL_STATE, action) {
 
  switch (action.type) {
    // case 'GET_RANDOM_CARD': 
    //   return {
    //     ...state,
    //     randomCard: [action.currentCards[Math.floor((Math.random() * action.currentCards.length))]]
    //   }
    case 'UPDATE_DECK':
      return {
        ...state,
        availableCards: [...state.availableCards.filter((card) => card !== action.card)]
      }

    // case 'ADD_SEEN_CARD':
    //   return {
    //     ...state,
    //     seenCards: [
    //       ...state.seenCards, 
    //        action.randomCard
    //      ]
    //   }
    case 'TOGGLE_END_OF_DECK':
      return {
        ...state,
        endOfDeck: action.eod
      }
    default: return state
  }
}

  
export default cardReducer