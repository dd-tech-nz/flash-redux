import App from './App'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getRandomCard} from '../redux/actions'

function mapStateToProps(state) {
  return {
    cardData: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRandomCard }, dispatch)
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App)

export default Main