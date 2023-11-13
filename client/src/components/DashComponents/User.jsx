import { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make a GET request to retrieve user items from your server
    axios.get("http://localhost:8000/users")
      .then((response) => {
        // Update the menuItems state with the retrieved data
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user items:", error);
      });
  }, []); // Use an empty dependency array to fetch data only once when the component mounts

  const userDelete = async (id) => {
    axios.delete(`http://localhost:8000/users/${id}`)
      .then((response) => {
        // Handle the successful deletion
        console.log("User Item Deleted:", response.data);
        // Update the users state after deleting a user, if needed
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((error) => {
        // Handle errors, such as server errors or item not found
        console.error("Error Deleting User Item:", error);
      });
  }

  return (
    <div className="flex flex-col justify-start h-screen w-full items-start pl-5 pt-5 gap-3">
      <h1 className="text-4xl font-medium">Users</h1>
      <div className="overflow-y-auto scroll-m-2 h-[90%]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                        <span className="text-xl">{user.name[0]}</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {user.role}
                  </span>
                </td>
                <td>{user.email}</td>
                <th>
                  <button className="btn btn-ghost btn-xs" onClick={() => userDelete(user._id)}>remove</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
