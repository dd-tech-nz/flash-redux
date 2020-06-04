import React, { Component } from 'react'
// import './DrawButton.css'
import {Link} from 'react-router-dom'

class DrawButton extends Component{
  constructor(props) {
    super(props)

    this.drawCard = this.drawCard.bind(this)
  }

  drawCard() {
    this.props.drawCard()
  }

  render() {
    if (this.props.eod) {
      return (
        <div>
          <div className="buttonContainer"><Link className='addIcon' to='/AddCard'></Link>
          
            <button className="btn-eod">End of Deck</button>
            <Link className='viewDeck' to='/Decks'></Link>
          </div>

          <div className="controls">
          
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="buttonContainer"><Link className='addIcon' to='/AddCard'></Link>
          
            <button className="btn" onClick={this.props.drawCard}>Draw Card</button>
            <Link className='viewDeck' to='/Decks'></Link>
          </div>

          <div className="controls">
          
          </div>
        </div>
      )
    }
  }
}

export default DrawButton