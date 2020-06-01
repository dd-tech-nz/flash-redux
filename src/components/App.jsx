import React, { Component } from 'react';
import Card from './Card'
import AddCard from './AddCard'
import DrawButton from './DrawButton'
import Deck from './Deck'
import Header from './Header'
import EditCard from './EditCard'
import Answers from './Answers'
import ResetButton from './ResetButton'
import { Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    const {getRandomCard, cardData} = this.props
    getRandomCard(cardData)
  }
 
  render() {
    console.log(this.props.randomCard)
    return (
      <div>
        <Route exact path='/' component={Header} />
        <Route exact path="/" render={() => (
          <div className="App">
          <div className="cardRow">
          <Card
            // eod={this.state.endOfDeck}
               card = {this.props.randomCard}
          />
          
            </div>
            
          </div>
          )}/>
       </div>
    )
  }
  
}

export default App
