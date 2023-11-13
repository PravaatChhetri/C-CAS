import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Feedback = () => {
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    // Make a GET request to retrieve menu items from your server
    axios.get("http://localhost:8000/feedbacks")
      .then((response) => {
        // Update the menuItems state with the retrieved data
        setFeedback(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const feedbackDelete = async(id) => {
    axios.delete(`http://localhost:8000/feedbacks/${id}`)
    .then((response) => {
      // Handle the successful deletion
      console.log("Feedback Deleted:", response.data);


    })
    .catch((error) => {
      // Handle errors, such as server errors or item not found
      console.error("Error Deleting Feedback:", error);
    });
  }
  
  

  return (
    <div className="flex flex-col justify-start h-screen w-full items-start pl-5 pt-5 gap-3">
    <h1 className="text-4xl font-medium ">Feedback</h1>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
        <tr>
            <th>Subject</th>
            <th>Message</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
      {feedback.map((feed)=>{
        return(
          <tr>
            
          <td>
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold">{feed.subject}</div>
                
              </div>
            </div>
          </td>
          <td>
            {feed.message} 
            
          </td>
          <th>
            <button className="btn btn-ghost btn-xs" onClick={()=>{feedbackDelete(feed._id)}}>remove</button>
          </th>
        </tr>
        );
      })}
         

         
       
        </tbody>
       
      </table>
    </div>
  </div> 
  )
}

export default Feedback