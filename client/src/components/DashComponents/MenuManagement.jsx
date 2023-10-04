import React from 'react'

const MenuManagement = () => {
  return (
    <div className="flex flex-col justify-start h-screen w-full items-start pl-5 pt-5 gap-3">
      <h1 className="text-4xl font-medium ">Menu Management</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Item Name</th>
              <th>Description</th>
              <th>Price</th>
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
                    <div className="font-bold">Alu Rice</div>
                    {/* <div className="text-sm opacity-50">CST</div> */}
                  </div>
                </div>
              </td>
              <td>
                Veg
                
              </td>
              <td>Nu.70</td>
              <th>
                <button className="btn btn-ghost btn-xs">remove</button>
              </th>
            </tr>
            {/* row 2 */}
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
                    <div className="font-bold">Cheese Momo</div>
                    {/* <div className="text-sm opacity-50">CST</div> */}
                  </div>
                </div>
              </td>
              <td>
                Veg
                
              </td>
              <td>Nu.50</td>
              <th>
                <button className="btn btn-ghost btn-xs">remove</button>
              </th>
            </tr>

            {/* row 3 */}
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
                    <div className="font-bold">Alu Paratha</div>
                    {/* <div className="text-sm opacity-50">CST</div> */}
                  </div>
                </div>
              </td>
              <td>
                Veg
                
              </td>
              <td>Nu.50</td>
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
                    <div className="font-bold">Chicken Rice</div>
                    {/* <div className="text-sm opacity-50">CST</div> */}
                  </div>
                </div>
              </td>
              <td>
                Non-Veg
                
              </td>
              <td>Nu.100</td>
              <th>
                <button className="btn btn-ghost btn-xs">remove</button>
              </th>
            </tr>
         
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Item Name</th>
              <th>Description</th>
              <th>Price</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>   
  )
}

export default MenuManagement