import { useState, useEffect } from "react";
import axios from "axios";

const InventoryManagement = () => {

  const [image, setImg] = useState(null);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Threshold, setThreshold] = useState("");

  const [Items, setItems] = useState([]);

  useEffect(() => {
    // Make a GET request to retrieve menu items from your server
    axios.get("http://localhost:8000/inventory")
      .then((response) => {
        // Update the menuItems state with the retrieved data
        const data=response.data.filter((item)=>item.approved_status==false);
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);


  const submitForm = async(e) => {
    fetch("http://localhost:8000/inventory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: image,
        name: itemName,
        price: price,
        quantity: Quantity,
        threshold: Threshold,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  };

  const approveInventoryItem = async (ItemId) => {
    try {
      const response = await axios.put(`http://localhost:8000/inventory/approve/${ItemId}`);
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
      <h1 className="text-4xl font-medium ">Inventory Management</h1>
      <div className="divider"></div>
      <div className="flex flex-col lg:flex-row justify-between w-[90%] h-[80%] scroll-m-0">
        <div className="overflow-y-auto scroll-m-0 h-[100%] mb-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Threshold</th>
                <th>Approved Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             {Items.map((item,key) => {
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
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.threshold}</td>
                         <td>{item.approved_status?"True":"False"}</td>
                <th>
                  <button onClick={() => {approveInventoryItem(item._id)}} className="btn btn-ghost btn-xs">Approve</button>
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

}

export default InventoryManagement