import React from 'react'

const CustomerOrder = () => {
  return (
    <div className="flex flex-col justify-start h-screen w-full items-start pl-5 pt-5 gap-3">
      <h1 className="text-4xl mt-4 font-medium ">Customers Orders</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Completed</th>
              <th>Order By</th>
              <th>Items</th>
              <th>Total</th>
              
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
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                      <span className="text-xl">HH</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">CST</div>
                  </div>
                </div>
              </td>
              <td className='flex flex-col gap-2'>
             
                <span className="badge badge-ghost badge-sm">
                  Alu Rice
                </span>
                <span className="badge badge-ghost badge-sm">
                 Cocacola
                </span><span className="badge badge-ghost badge-sm">
                  Momo
                </span>
              </td>
              <td>harthagerty@gmail.com</td>
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
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                      <span className="text-xl">BS</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">CST</div>
                  </div>
                </div>
              </td>
              <td className='flex flex-col gap-2'>
             
             <span className="badge badge-ghost badge-sm">
               Alu Rice
             </span>
             <span className="badge badge-ghost badge-sm">
              Cocacola
             </span><span className="badge badge-ghost badge-sm">
               Momo
             </span>
           </td>
              <td>briceswyre@gmail.com</td>
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
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                      <span className="text-xl">MF</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">CST</div>
                  </div>
                </div>
              </td>
              <td className='flex flex-col gap-2'>
             
                <span className="badge badge-ghost badge-sm">
                  Alu Rice
                </span>
                <span className="badge badge-ghost badge-sm">
                 Cocacola
                </span><span className="badge badge-ghost badge-sm">
                  Momo
                </span>
              </td>
              <td>marjyferencz@gmail.com</td>
              <th>
                <button className="btn btn-ghost btn-xs">remove</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                      <span className="text-xl">YT</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">CST</div>
                  </div>
                </div>
              </td>
              <td className='flex flex-col gap-2'>
             
                <span className="badge badge-ghost badge-sm">
                  Alu Rice
                </span>
                <span className="badge badge-ghost badge-sm">
                 Cocacola
                </span><span className="badge badge-ghost badge-sm">
                  Momo
                </span>
              </td>
              <td>yancytear@gmail.com</td>
              <th>
                <button className="btn btn-ghost btn-xs">remove</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Completed</th>
              <th>Order By</th>
              <th>Items</th>
              <th>Total</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default CustomerOrder