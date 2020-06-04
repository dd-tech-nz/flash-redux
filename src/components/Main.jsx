import App from './App'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {updateDeck, setEndOfDeck} from '../redux/actions'

function mapStateToProps(state) {
  return {
    cardData: state.cards,
    availableCards: state.availableCards,
    // randomCard: state.randomCard,
    // seenCards: state.seenCards,
    endOfDeck: state.endOfDeck
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateDeck, setEndOfDeck }, dispatch)
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App)

export default Main