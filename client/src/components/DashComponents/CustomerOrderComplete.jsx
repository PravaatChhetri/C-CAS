import {useEffect,useState} from 'react'
import axios from 'axios'

const CustomerOrderComplete = () => {
  const [orders, setOrders] = useState([]);  

  useEffect(() => {
     // Make a GET request to retrieve menu items from your server
     const email=localStorage.getItem("userEmail");
     axios.get("http://localhost:8000/orders/"+email)
     .then((response) => {
       // Update the menuItems state with the retrieved data
      const data=response.data.filter((item)=>item.status=="Completed");
       setOrders(data);
     })
     .catch((error) => {
       console.error("Error fetching customer orders", error);
     });
 }, []);
  return (
    <div className="flex flex-col justify-start h-screen w-full items-start pl-5 pt-5 gap-3">
      <h1 className="text-4xl mt-4 font-medium ">Order Completed</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <td>Order Number</td>
              <th>Order By</th>
              <th>Items</th>
              <th>Total</th>
              
           
            </tr>
          </thead>
          <tbody>
        {orders.map((order,key) => {
          return(
            <tr key={key}>
              <th>
                <label>
                  {key+1}
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{order.email}</div>
                  </div>
                </div>
              </td>
              <td className='flex flex-col gap-2'>
                {order.items.map((item,key) => {
                  return(
                    <span className="badge badge-ghost badge-sm" key={key}>
                    {order.items[key]} x {order.quantity[key]}
                  </span>
                  )
                })}
              </td>
              <td>{order.total}</td>
              
            </tr>
          );
        })
          }     
          </tbody>

  
        </table>
      </div>
    </div>
  )
}

export default CustomerOrderComplete;