import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card">
            <div className="card-content">
              <img src={props.image} alt="Card image" height="400" width="250" className="card-image"></img>
              <h2 className="card-title">{props.title}</h2>
              <p className="card-text">{props.price}</p>
              <a href={`/products/${props.id}`}><button className="card-button">Read More</button></a>
          </div>
        </div>
    </>
  )
}

export default Card;
