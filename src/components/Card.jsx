import React from 'react'

// import './Card.css'

class Card extends React.Component {
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
    // componentDidMount () {
    //   console.log(this.props)
    // }
    
    render () {
      if (this.props.card[0]) {
      return (
      <div className="card-container">
        <div className="card">
          <div className="front">
            <div className="question">{this.props.card[0].question}</div>
            <div className="image">
              <img src={this.props.card[0].imageLink} alt='graphic not available' />
            </div>
          </div>
          <div className="back">
            <div className="answer">{this.props.card[0].answer}</div>
          </div>
        </div>
      </div>
    )
    
    } else {
      return null
    }
    }
}

export default Card

// const Card = (props) => {
//   // if (props.eod) {
//   //   return (
//   //     <div className="card-container">
//   //       <div className="card">
//   //         <div className="front">
//   //           <div className="question">End of Deck</div>
//   //         </div>
//   //         <div className="back">
//   //           <div className="answer">End of deck</div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   )
//   // } else {
    
 
//     return (
//       <div className="card-container">
//         <div className="card">
//           <div className="front">
//             <div className="question">{props.card.question}</div>
//             <div className="image">
//               <img src={props.card.imageUrl} alt='graphic not available' />
//             </div>
//           </div>
//           <div className="back">
//             <div className="answer">{props.card.answer}</div>
//           </div>
//         </div>
//       </div>
//     )
  
// }

// export default Card