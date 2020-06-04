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
    this.setState({
      randomCard: this.getRandomCard()
    })
    
    const atEnd = endOfDeck || (availableCards.length <= 0)
    setEndOfDeck(atEnd)
  }

  Reset() {
    window.location.reload()
  }
  
 
  render() {
    return (
      <div>
        <Route exact path='/' component={Header} />
        <Route exact path="/" render={() => (
          <div className="App">
          <div className="reset">
          <ResetButton
            onReset={this.Reset}
          />
    </div>
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
            <div className="answers">
              <Answers
                card={this.state.currentCard}
                onknowAnswer={this.knowAnswer}/>
            </div>
          </div>
        )} />
        <Route path="/AddCard" render={({history}) => (
          <AddCard onAddCard={(addedCard) => {
            this.addCard(addedCard)
            history.push('/')
          }}/>
        )} />
        <Route path="/Decks" render={() => (
          <div className="cardGrid">
            <Deck cards={this.state.cards} onRemoveCard={this.removeCard}/>
          </div>
        )} />
       </div>
    )
  }
  
}

export default App
