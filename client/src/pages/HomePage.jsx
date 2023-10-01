import React from 'react'
import Food from "../assets/Food.png"

const HomePage = () => {
  const foodStyle={
    backgroundImage: 'url("https://img.freepik.com/free-vector/fast-food-advertising-composition_1284-17372.jpg")',
    backgroundSize: 'cover',
  };

  return (
    <div>
      <div className="hero h-[90vh] w-[100vw] bg-base-200 flex">
        <div className='w-[50vw] h-[100%] flex flex-col justify-center'>
          <h1 className='text-6xl font-bold'>MunchCraft</h1>
          <p className='text-2xl'>A new way to order food</p>
        </div>
        {/* <div className='w-[50%] h-[100%]' style={{
          backgroundImage:url({Food}),
          backgroundSize: 'cover',
        }}></div> */}
        </div>
    </div>
  );

}

export default HomePage;