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
  constructor() {
    super()

    this.updateCard = this.updateCard.bind(this)
    this.state = {
      randomCard: {}
    }
  }

 

componentDidMount() {
  this.setState({
    randomCard: this.getRandomCard()
  })
  }

  getRandomCard() {
    const { availableCards, updateDeck } = this.props
    let card = availableCards[Math.floor(Math.random() * availableCards.length)]
    updateDeck(card)
    return (card)
  }

  updateCard() {
    const { endOfDeck, availableCards, setEndOfDeck } = this.props
    // this.props.addSeenCard(randomCard[0].id)
    this.setState({
      randomCard: this.getRandomCard()
    })
    
    const atEnd = endOfDeck || (availableCards.length <= 0)
    setEndOfDeck(atEnd)
  }
  
 
  render() {
    return (
      <div>
        <Route exact path='/' component={Header} />
        <Route exact path="/" render={() => (
          <div className="App">
          <div className="cardRow">
          <Card
                card={this.state.randomCard}
              />
              <div className="buttonRow">
                <DrawButton
                  drawCard={this.updateCard}
                  eod={this.props.endOfDeck}
              />
            </div>
            </div>
          </div>
          )}/>
       </div>
    )
  }
  
}

export default App
