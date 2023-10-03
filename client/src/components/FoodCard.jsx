import React from 'react'

const FoodCard = (props) => {
  return (
    <div className="card w-64 sm:w-96 glass">
    <figure>
    <img
        src={props.image}
        alt="car!"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title ">{props.title}</h2>
      <p>{props.data}</p>
      
      <div className="card-actions justify-end">
        <button className="btn btn-secondary">Nu.{props.price}</button>
      </div>
    </div>
  </div>
  )
}

export default FoodCard