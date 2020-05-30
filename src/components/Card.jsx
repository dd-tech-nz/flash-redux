import React from 'react'

// import './Card.css'

const Card = (card) => {
  // if (props.eod) {
  //   return (
  //     <div className="card-container">
  //       <div className="card">
  //         <div className="front">
  //           <div className="question">End of Deck</div>
  //         </div>
  //         <div className="back">
  //           <div className="answer">End of deck</div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // } else {
  console.log(card)
  
 
    return (
      <div className="card-container">
        <div className="card">
          <div className="front">
            <div className="question">{card.question}</div>
            <div className="image">
              <img src={card.image} alt='graphic not available' />
            </div>
          </div>
          <div className="back">
            <div className="answer">{card.answer}</div>
          </div>
        </div>
      </div>
    )
  
}

export default Card