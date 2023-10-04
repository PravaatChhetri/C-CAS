import React from 'react'

const Feedback = () => {
  return (
    <div className="flex flex-col justify-start h-screen w-full items-start pl-5 pt-5 gap-3">
    <h1 className="text-4xl font-medium ">Menu Management</h1>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
        <tr>
            <th></th>
            <th>Suggestion</th>
            <th>Description</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                {/* <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                    <span className="text-xl">HH</span>
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Cleanliness to be maintained </div>
                  {/* <div className="text-sm opacity-50">CST</div> */}
                </div>
              </div>
            </td>
            <td>
              We need clean canteen for have more appetizing food
              
            </td>
            <td>3.5/5</td>
            <th>
              <button className="btn btn-ghost btn-xs">remove</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                {/* <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                    <span className="text-xl">HH</span>
                  </div>
                </div> */}
                <div>
                  <div className="font-bold">Expensive Pricing</div>
                  {/* <div className="text-sm opacity-50">CST</div> */}
                </div>
              </div>
            </td>
            <td>
              The pricing of the goods are too high for students. 
              
            </td>
            <td>1/5</td>
            <th>
              <button className="btn btn-ghost btn-xs">remove</button>
            </th>
          </tr>

         
       
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Suggestion</th>
            <th>Description</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div> 
  )
}

export default Feedback