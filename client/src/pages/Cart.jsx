import React, { useState } from 'react'
import Img_1 from '../assets/Pizza_1.jpg'
import Img_2 from '../assets/Pizza_2.jpg'
import Img_3 from '../assets/Pizza_3.jpg'
import scanner from '../assets/scanner.png'
import Del from '../assets/delete.png'




const Cart = () => {

  const [items, newItems] = useState ({
    item:[
    {id: 1,
    name: "Cheese Pizza",
    price: 7.49,
    quantity: 1,
    image: Img_1,},
    
    {id: 2,
      name: "Cheese items",
      price: 30,
      quantity: 1,
      image: Img_1,},
      
    {id: 3,
      name: "Cheese pasta",
      price: 7.49,
      quantity: 1,
      image: Img_1,},
      
      {id: 4,
        name: "Cheese momo",
        price: 29,
        quantity: 1,
        image: Img_1,}
  ]
  });
  return (
    <div className='pl-8 flex-col '>
      <p className='font-serif text-3xl pt-10 font-bold text-orange-500'>My Cart</p>
      <div className='divider'></div>
      <div className='flex  w-3/6 h-30 rounded-3xl outline outline-offset-4 outline-orange-300 mt-8'>
        <img src={Img_1} width={90} className='rounded-3xl'></img>
        <div className='pt-4 font-semibold pl-20 bg-base-100 pr-20'>
          <p className='font-bold font-serif'>{items.item[0].name}</p>
          <p className=' font-semibold pt-2 pl-'>*{items.item[0].quantity}</p>  
        </div>
        <div className='pl-40 bg-base-100 rounded-r-full pb-4 '>
        <img src={Del} className='rounded-full pt-2' width={40}></img>
        <p className='pt-1  font-semibold text-sm'>Nu. {items.item[0].price}</p>
        
        </div>
        <div>
          
        </div>
        <div className=''>
        <div className=''>
        
        <div >
        <div className="card w-96 bg-base-100 text-primary-content absolute top-42 right-20 outline outline-offset-2 outline-orange-200 ">
  <div className=" card-body ">
    <h2 className="font-bold font-serif flex-col">Items</h2>
    <div className='flex-col'>
      <p className='font-sm font-serif'>{items.item[0].name}</p>
      <p className='font-sm font-serif'>{items.item[1].name}</p>
      
    </div>
    </div>
    <div className='pl-9'>
    <h2 className='font-serif font-bold '>Total</h2>
    </div>
    <div>
    
    <div className="card-actions justify-end pb-3 pr-3 ">
      <button className="btn outline outline-offset-2 outline-orange-300 bg-base-100">Buy Now</button>
    </div>
  </div>
</div>
</div>

        </div>
        </div>
        
      
        
       
      
      </div>
      <div className="card w-96 text-primary-content absolute right-20 w-100 mt-44 pt-2 outline outline-offset-2 outline-orange-200 ">
  <figure><img src={scanner} alt="Shoes"  className='w-60 rounded-3xl pt-3'/></figure>
  
    <h2 className="card-title justify-center ml-10 pr-10 pt-4 font-serif">Scan Here</h2>  
  </div>


      
      
      <div className='pt-10'></div>   
      <div className='flex bg-base-100 w-3/6 h-30 rounded-3xl outline outline-orange-300 outline-offset-1 '>
        <img src={Img_2} width={90} className='rounded-3xl'></img>
        <div className='pt-4 font-semibold pl-20 bg-base-100 pr-20'>
          <p className='font-bold font-serif'>{items.item[1].name}</p>
          <p className=' font-semibold pt-2 pl-'>*{items.item[1].quantity}</p>  
        </div>
        <div className='pl-40 bg-base-100 rounded-r-full pb-4 '>
        <img src={Del} className='rounded-full pt-2' width={40}></img>
        <p className='pt-1  font-semibold text-sm'>Nu. {items.item[1].price}</p>
        
        </div>
      </div>
      <div className='pt-10'></div>  
       
      <div className='flex bg-base-100 w-3/6 h-30 rounded-3xl outline outline-offset-2 outline-orange-300 '>
        <img src={Img_3} width={90} className='rounded-3xl'></img>
        <div className='pt-4 font-semibold pl-20 bg-base-100 pr-20'>
          <p className='font-bold font-serif'>{items.item[2].name}</p>
          <p className=' font-semibold pt-2 pl-'>*{items.item[2].quantity}</p>  
        </div>
        <div className='pl-40 bg-base-100 rounded-r-full pb-4 '>
        <img src={Del} className='rounded-full pt-2' width={40}></img>
        <p className='pt-1  font-semibold text-sm'>Nu. {items.item[3].price}</p>
        
        </div>
      </div>

      <div className='pt-10'></div>

      <div className='flex bg-base-100 w-3/6 h-30 rounded-3xl outline outline-offset-2 outline-orange-300 '>
        <img src={Img_1} width={90} className='rounded-3xl'></img>
        <div className='pt-4 font-semibold pl-20 bg-base-100 pr-20'>
          <p className='font-bold font-serif'>{items.item[3].name}</p>
          <p className=' font-semibold pt-2 pl-'>*{items.item[3].quantity}</p>  
        </div>
        <div className='pl-40 bg-base-100 rounded-r-full pb-4 '>
        <img src={Del} className='rounded-full pt-2' width={40}></img>
        <p className='pt-1  font-semibold text-sm'>Nu. {items.item[0].price}</p>
        
        </div>
      </div>
      <div className='pt-10'></div>
      <div className='flex bg-base-100 w-3/6 h-30 rounded-3xl outline outline-offset-2 outline-orange-300 '>
        <img src={Img_2} width={90} className='rounded-3xl'></img>
        <div className='pt-4 font-semibold pl-20 bg-base-100 pr-20'>
          <p className='font-bold font-serif'>{items.item[2].name}</p>
          <p className=' font-semibold pt-2 pl-'>*{items.item[2].quantity}</p>  
        </div>
        <div className='pl-40 bg-base-100 rounded-r-full pb-4 '>
        <img src={Del} className='rounded-full pt-2' width={40}></img>
        <p className='pt-1  font-semibold text-sm'>Nu. {items.item[1].price}</p>
        
        
        </div>
        
      </div>
      <div className='pt-10'></div>
      <div className='flex bg-base-100 w-3/6 h-30 rounded-3xl outline outline-offset-2 outline-orange-300 '>
        <img src={Img_3} width={90} className='rounded-3xl'></img>
        <div className='pt-4 font-semibold pl-20 bg-base-100 pr-20'>
          <p className='font-bold font-serif'>{items.item[3].name}</p>
          <p className=' font-semibold pt-2 pl-'>*{items.item[3].quantity}</p>  
        </div>
        <div className='pl-40 bg-base-100 rounded-r-full pb-4 '>
        <img src={Del} className='rounded-full pt-2' width={40}></img>
        <p className='pt-1  font-semibold text-sm'>Nu. {items.item[3].price}</p>
        
        </div>
      </div>
      <div className='divider'></div>
      <div>
    
    <div className="card-actions justify-center pb-3 pr-3 s">
      <button className="btn bg-base-100 outline outline-orange-200">Return</button>
    </div>
  </div>
     
      
      
    </div>
  )
}

export default Cart