import {useEffect,useState} from 'react'
import axios from 'axios'

const CustomerOrder = () => {
  const [orders, setOrders] = useState([]);

  const completeOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:8000/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        console.log('Order completed successfully');
        // Perform any additional actions after completing the order
      } else if (response.status === 404) {
        console.log('Order not found');
      } else {
        console.log('Error completing the order');
      }
    } catch (error) {
      console.error(error);
      console.log('Server Error');
    }
  };
  

  useEffect(() => {
     // Make a GET request to retrieve menu items from your server
     axios.get("http://localhost:8000/orders")
     .then((response) => {
       // Update the menuItems state with the retrieved data
      const data=response.data.filter((item)=>item.status=="Pending");
       setOrders(data);
     })
     .catch((error) => {
       console.error("Error fetching customer orders", error);
     });
 }, []);
  return (
    <div className="flex flex-col justify-start h-screen w-full items-start pl-5 pt-5 gap-3">
      <h1 className="text-4xl mt-4 font-medium ">Customers Orders</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <td>Order Number</td>
              <th>Order By</th>
              <th>Items</th>
              <th>Total</th>
              <th>Completed</th>
           
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
              <th>
                <button className="btn btn-ghost btn-xs" onClick={()=>{
                  completeOrder(order._id)
                }}>completed</button>
              </th>
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

export default CustomerOrder