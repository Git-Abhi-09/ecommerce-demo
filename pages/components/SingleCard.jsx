import React from 'react'
const SingleCard = (props) => {
  return (
    <>
     <div className="card">
        <div className="card-content">
      <img src={props.image} alt="Card image" height="400" width="250" className="card-image"></img>
          <h2 className="card-title"> Title : {props.title}</h2>
          <h3 className="card-text">price : {props.price}</h3>
          <p className="card-text">description : {props.description}</p>
          <h3 className="card-text">category : {props.category}</h3>
          <h3 className="card-text">rating : {props.rating}</h3>
          <h3 className="card-text">count : {props.count}</h3>
      </div>
  </div>
    </>
  )
}

export default SingleCard;