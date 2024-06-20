import React from 'react'
import { useRouter } from 'next/router'
const Card = (props) => {
  const router=useRouter()
  return (
    <>
      <div className="card" onClick={()=>{
router.push(`/components/${props.id}`)
      }}>
            <div className="card-content">
           <center>  <img src={props.image} alt="Card image" height="400" width="250" className="card-image"></img></center> 
              <p className="card-text">{props.id}</p>
              <h2 className="card-title">{props.title}</h2>
              <p className="card-text">{props.price}</p>
          </div>
        </div>
    </>
  )
}

export default Card;
