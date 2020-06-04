import React from 'react'

// import './Card.css'
const Card = (props) => {
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
  


  if (props.card) {
     
      return (
        <div className="card-container">
          <div className="card">
            <div className="front">
              <div className="question">{props.card.question}</div>
              <div className="image">
                <img src={props.card.imageLink} alt='graphic not available' />
              </div>
            </div>
            <div className="back">
              <div className="answer">{props.card.answer}</div>
            </div>
          </div>
        </div>
      )
    
    } else {
      return (
        <div className="card-container">
          <div className="card">
            <div className="front">
              <div className="question">Thats All!</div>
              <div className="image">
                <img src='https://media.giphy.com/media/l4FAPaGGeB7D1LfIA/giphy.gif' alt='graphic not available' />
              </div>
            </div>
            <div className="back">
              <div className="answer">End of Deck</div>
            </div>
          </div>
        </div>
      )
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