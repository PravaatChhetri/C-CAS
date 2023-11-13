import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [inventoryItems, setInventoryItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [getQuantity, setQuantity] = useState({});

  const navigate = useNavigate();
  const categories = [
    "All",
    "BreakFast",
    "Lunch",
    "Shakes",
    "Snacks",
    "Grocery",
  ];

  

  function saveToLocalStorage(selectedList, getQuantity) {
    const cartItems = selectedList.map((id) => ({
      id,
      name:getQuantity[id].name,
      price:getQuantity[id].price,
      quantity: getQuantity[id].num,
    }));
  
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  
  async function loadFromLocalStorage(setSelectedList, setQuantity) {
    const cartItemsJSON = await localStorage.getItem("cartItems");
    if (cartItemsJSON) {
      const cartItems = JSON.parse(cartItemsJSON);
      const selected = cartItems.map((item) => item.id);
      const quantities = cartItems.reduce((acc, item) => {
        acc[item.id] = item.quantity;
        return acc;
      }, {});
  
      setSelectedList(selected);
      setQuantity(quantities);
    }
  }
  

  const menuFunc = (id) => {
    if (!selectedList.includes(id)) {
      setSelectedList([...selectedList, id]);
    } else {
      const { [id]: removed, ...newQuantity } = getQuantity;
      setQuantity(newQuantity);
      setSelectedList(selectedList.filter((item) => item !== id));
    }
  };

  const quantityFunc = (id,name,price, num) => {
    if (selectedList.includes(id)) {
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [id]: {name,price,num}
      }));
      
      saveToLocalStorage(selectedList, { ...getQuantity, [id]: {name,price,num} });
    }
  };

  const filterItems = (category) => {
    if (category === "All") {
      setDisplayItems(menuItems);
    } else if (category === "Grocery") {
      setDisplayItems(inventoryItems);
    } else {
      const newItems = menuItems.filter((item) => item.category === category);
      setDisplayItems(newItems);
    }
  };

  const getItems = async() =>{
    const res = axios.get("http://localhost:8000/menu");
    const data = (await res).data;
    const d=data.filter((item)=>item.approved_status==true);
    return d;
  }

const getInventoryItems = async() =>{
  const res = axios.get("http://localhost:8000/inventory");
  const data = (await res).data;
  const d=data.filter((item)=>item.approved_status==true);
  return d;
}
  useEffect(() => {

getItems().then((data) => {
  setMenuItems(data);
  setDisplayItems(data);
});

getInventoryItems().then((data) => {
  setInventoryItems(data);
});

  }, []);



  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2 className="mt-5 text-4xl text-center font-semibold mb-5">Menu</h2>
          <div className="underline w-20 h-1/4 bg-secondary mx-auto"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center pb-10">
          {categories.map((category, index) => {
            return (
              <button
                type="button"
                className="filter-btn text-xl bg-transparent hover:bg-accent hover:text-white border-transparent btn capitalize mx-2 px-3 py-1 text-gold cursor-pointer transition rounded-md"
                key={index}
                onClick={() => {filterItems(category)}}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[70vw] gap-4 justify-items-center mb-10">
          {displayItems.map((menuItem) => {
            // Define an initial checked state based on whether menuItem._id is in selectedList

            // Use the initialChecked state to initialize the checked state

            return (
              <article
                key={menuItem._id}
                className="menu-item w-72 shadow-xl bg-white rounded-lg overflow-hidden"
              >
                <img
                  src={menuItem.image}
                  alt={menuItem.name}
                  className="w-full h-64 object-contain object-center p-2"
                />
                <div className="p-4 bg-accent">
                  <h2 className="font-bold text-xl mb-2 text-white">
                    {menuItem.name}
                  </h2>
                  <div className="flex justify-between py-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      onClick={() => {
                        menuFunc(menuItem._id);
                        quantityFunc(menuItem._id,menuItem.name,menuItem.price, 1);
                      }}
                    />

                    <input
                      type="number"
                      className="w-10 h-6 rounded-lg input-primary bg-primary text-center font-semibold"
                      onBlur={(e) => {
                        quantityFunc(menuItem._id,menuItem.name,menuItem.price, e.target.value);
                      }}
                      placeholder="1"
                      defaultValue={1}
                    />

                    <label className="text-white font-semibold">
                      Add to cart
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">{`Nu.${menuItem.price}`}</span>
                    <button
                      onClick={() => {
                        navigate("/my-cart");
                      }}
                      className="glass hover-bg-primary text-white font-bold py-2 px-4 rounded"
                    >
                      Cart
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Menu;
