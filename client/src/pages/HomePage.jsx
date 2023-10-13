import React from 'react'
import Img from '../assets/Fast-food.png'




const HomePage = () => {

  return (
    <div className='bg-orange-100'>
      <div className="hero h-[90vh] w-[100vw]  flex pl-10">
        <div className='w-[50vw] h-[100%] flex flex-col justify-center'>
          <p className="text-6xl text-orange-500 font-bold pl-10">Munch</p>
          <h1 className='text-6xl font-bold text-orange-500 pl-10'>  Craft</h1>
          <p className='text-2xl pt-2 pl-10 text-gray-400 text-xl'>Meow meow meow</p>
        
        <div>

          <button className='font-semibold rounded-3xl bg-orange-400 text-white  my-10 mx-20 pl-3 pr-3 pb-1 pt-1'>Order Now</button>
          </div>
          
          </div>
          <img src={Img} width={710}/>
        
      </div>
     
    </div>
  );

}

export default HomePage;