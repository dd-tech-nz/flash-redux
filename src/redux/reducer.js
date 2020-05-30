import CARD_DATA from '../components/card.data'

const cardReducer = function cards(state = CARD_DATA, action) {
 
  switch (action.type) {
    case 'GET_RANDOM_CARD': return [action.currentCards[Math.floor((Math.random() * action.currentCards.length))]]
    default: return state
  }
}

  
export default cardReducer