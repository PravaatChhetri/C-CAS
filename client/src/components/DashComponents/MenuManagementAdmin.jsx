import { useState, useEffect } from "react";
import axios from "axios";

const MenuManagement = () => {
  const [image, setImg] = useState(null);
  const [dishName, setDishName] = useState("");
  const [price, setPrice] = useState("");
  const [isVeg, setIsVeg] = useState(false);
  const [category, setCategory] = useState("");

  const [menuItems, setMenuItems] = useState([]);
  

  useEffect(() => {
    // Make a GET request to retrieve menu items from your server
    axios.get("http://localhost:8000/menu")
      .then((response) => {
        // Update the menuItems state with the retrieved data
        const data=response.data.filter((item)=>item.approved_status==false);
        setMenuItems(data);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);


  const submitForm = async(e) => {
    const res=await fetch("http://localhost:8000/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: image,
        name: dishName,
        price: price,
        category: category,
        veg_status: isVeg,
      }),
    })
    if (res.status==201){
      console.log("Success:", res);
      alert("Menu Item Added");
    }
    else{
      console.log("Error:", res);
    }
     
  };

  const MenuDelete = async(id) => {
    const res=await axios.delete(`http://localhost:8000/menu/${id}`);
    if (res.status==200){
      console.log("Menu Item Deleted:", res.data);
      alert("Menu Item Deleted");
    }
    else{
      console.log("Error:", res);
    }
   
  }

  const approveMenuItem = async (menuItemId) => {
    try {
      const response = await axios.put(`http://localhost:8000/menu/approve/${menuItemId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const onInputChange = (e) => {
  
    console.log(e)
    let reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
      console.log(reader.result);
      setImg(reader.result);
    }
    reader.onerror =error =>{
      console.log("Error: ",error);
    }
   
  };


  return (
    <div className="flex flex-col justify-start h-screen w-full items-start pl-5 pt-5 gap-3">
      <h1 className="text-4xl font-medium ">Menu Management</h1>
      <div className="divider"></div>
      <div className="flex flex-col lg:flex-row justify-between w-[90%] h-[80%] scroll-m-0">
        <div className="overflow-y-auto scroll-m-0 h-[100%] mb-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Item Name</th>
                <th>Veg/Non-Veg</th>
                <th>Price</th>
                <th>Approved Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             {menuItems.map((item,key) => {
              return(
                <tr key={key}>
                  <td>
                    <img src={item.image} width={50} alt={item.name} />
                  </td>
                <td>
                  <div className="flex items-center space-x-3">
                
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.veg_status? "Veg":"Non-Veg"}</td>
                <td>{item.price}</td>
                <td>{item.approved_status?"True":"False"}</td>
                <th>
                  <button onClick={() => {approveMenuItem(item._id)}} className="btn btn-ghost btn-xs">Approve</button>
                </th>
              </tr>

              );
             })}
            

           
            </tbody>
          </table>
        </div>


      </div>
    </div>
  );
};

export default MenuManagement;
