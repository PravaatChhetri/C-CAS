import React from 'react'
import { useNavigate } from 'react-router-dom'

const FoodCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="card w-64 sm:w-96 glass">
    <figure className='bg-[#373636]'>
    <img
        src={props.image}
        className="w-full h-64 object-contain object-center p-2"
        alt="car!"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title ">{props.title}</h2>
      <p>{props.data}</p>
      
      <div className="card-actions justify-end">
        <button className="btn btn-secondary" onClick={()=>{navigate("/menu")}}>Nu.{props.price}</button>
      </div>
    </div>
  </div>
  )
}

export default FoodCard