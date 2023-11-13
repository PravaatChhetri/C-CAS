import React, { useState, useEffect } from "react";
import scanner from "../assets/scanner.png";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [values,setValues]=useState({});

  const [tot, setTotalPrice] = useState(0);

  // Load cart data from localStorage before fetching menu items
 // Empty dependency array ensures it runs once when the component mounts
 async function loadFromLocalStorage() {
  const cartItemsJSON = await localStorage.getItem("cartItems");
  if (cartItemsJSON) {
    const cartItems = JSON.parse(cartItemsJSON);
    setItems(cartItems);
    setSelectedList(cartItems);
    TotalPrice(cartItems);
    
  }
}

const handleRemoveItem = (itemId) => {
  // Remove an item from the cart
  const updatedItems = selectedList.filter((item) => item.id !== itemId);
  setSelectedList(updatedItems);

  // Update localStorage with the new cart state
  localStorage.setItem("cartItems", JSON.stringify(updatedItems));

  // Recalculate the total price
  TotalPrice(updatedItems);
};

const TotalPrice = (items) => {
  const total = items.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  const item= items.map((i) => i.name);
    const price= items.map((i) => i.price);
    const quantity= items.map((i) => i.quantity);
    setValues({item:item,price:price,quantity:quantity});
  setTotalPrice(total);

}
const submitForm = async(e) => {
  const res=await fetch("http://localhost:8000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: localStorage.getItem("userEmail"),
      items: values.item,
      quantity: values.quantity,
      price: values.price,
      total: tot,
    }),
  })
  if (res.status==201){
    console.log("Success:", res);
    alert("Your Order is placed.");
  }
  else{
    console.log("Error:", res);
  }
   
};

useEffect(() => {

  loadFromLocalStorage();
  

  
}, []);
 

  

  return (
    <div>
      <p className="text-center text-4xl pt-10 font-bold">My Cart</p>
      <div className="divider"></div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start w-96 lg:w-[80vw] mx-auto">
        <div className="w-96 lg:w-[50vw]">
          {selectedList.map((item) => (
            <div
              key={item.id}
              className="flex bg-base-100 h-[100px] items-stretch rounded-3xl outline outline-accent outline-offset-1 mt-5"
            >
              
              <div className="flex justify-around items-center w-full">
                <div className="flex items-center font-semibold bg-base-100">
                  <p className="font-medium text-lg">
                    {item.name} x {item.quantity}
                  </p>
                </div>
                  <p>
                    <span className="font-bold">Nu. {item.price}</span>
                  </p>
                <MdDelete className="text-3xl text-red-500 " onClick={()=>{handleRemoveItem(item.id)}} />
                
              </div>
            </div>
          ))}
        </div>
        <div>

        <div className="card w-96 bg-base-100 text-primary-content outline outline-offset-2 outline-accent mt-5">
                <div className="card-body">
                  <h2 className="font-bold font-serif flex-col">Items</h2>
                  <div className="flex-col">
                    {items.map((item) => (
                
                      <p key={item.id} className="font-sm font-serif">
                        {item.name} x {item.quantity}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="pl-9">
                  <h2 className=" font-bold">Total</h2>
                  <p className="font-bold">Nu. {tot}</p>
                </div>
                <div>
                  <div className="card-actions justify-end pb-3 pr-3">
                    <button className="btn hover:bg-secondary hover:text-white outline  outline-accent-300 " onClick={()=>{submitForm()}} >
                      Buy Now
                    </button>
                  </div>
                </div>
        </div>
        <div className="card w-96 bg-base-100 text-primary-content outline outline-offset-2 outline-accent mt-5 mx-auto md:">
      <img src={scanner} alt="QR Scanner"/>
      </div>
        </div>
      </div>      
      
      <div className="divider"></div>
      <div>
        <div className="card-actions justify-center pb-3 pr-3 s">
          <button className="btn bg-base-100 outline outline-accent hover:bg-secondary hover:text-white" onClick={()=>navigate('/menu')}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

