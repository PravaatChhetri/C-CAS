import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

const SalesTransaction = () => {
  const [val, setVal] = useState([]);
  const [topItems, setTopItems] = useState([]);

  const callUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    const totalUsers = data.length;
    return totalUsers;
  };

  const callMenu = async () => {
    const res = await fetch("http://localhost:8000/menu");
    const data = await res.json();
    const d = data.filter((item) => item.veg_status == false);
    const total = data.length;
    return data;
  };
  const callVeg = (data) => {
    const d = data.filter((item) => item.veg_status == false);
    const total = d.length;
    return total;
  };

  const callInventory = async () => {
    const res = await fetch("http://localhost:8000/inventory");
    const data = await res.json();
    const total = data.length;
    return total;
  };

  const callTopItems = async () => {
    const res = await fetch("http://localhost:8000/top-selling-products");
    const data = await res.json();
    return data;
  };

  async function callOrders() {
    try {
      const response = await axios.get("http://localhost:8000/orders"); // Replace with your actual API URL.
      const menuItems = response.data;
      console.log("menuItems", menuItems);
      return menuItems;
    } catch (error) {
      console.error(error.message);
      throw new Error("Failed to fetch menu data");
    }
  }

  function calculateMonthlySalesValue(menuItems) {
    const now = moment();
    const monthlySalesValue = menuItems.reduce((total, item) => {
      const orderDate = moment(item.createdAt);
      if (orderDate.isSame(now, "month")) {
        total += item.total;
      }
      return total;
    }, 0);

    return monthlySalesValue;
  }

  function calculateDailySalesValue(menuItems) {
    const now = moment();
    const dailySalesValue = menuItems.reduce((total, item) => {
      const orderDate = moment(item.createdAt);
      if (orderDate.isSame(now, "day")) {
        total += item.total;
      }
      return total;
    }, 0);

    return dailySalesValue;
  }

  function calculateTotalOrdersValue(menuItems) {
    const totalOrdersValue = menuItems.reduce((total, item) => {
      total += item.total;
      return total;
    }, 0);

    return totalOrdersValue;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersData = await callOrders();
        const monthlySales = calculateMonthlySalesValue(ordersData);
        const dailySales = calculateDailySalesValue(ordersData);
        const totalOrders = ordersData.length;
        const users = await callUsers();
        const data = await callMenu();
        const totalMenu = data.length;
        const veg = callVeg(data);
        const nonVeg = totalMenu - veg;
        const totalInventory = await callInventory();
        const topItems = await callTopItems();

        setVal({
          monthlySales,
          dailySales,
          totalOrders,
          users,
          totalMenu,
          totalInventory,
          veg,
          nonVeg,
        });
        setTopItems(topItems);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-start h-screen w-full items-start pl-5 pt-5 gap-3">
      <h1 className="text-4xl font-medium">Sales and Analytics</h1>
      <div className="overflow-y-auto scroll-m-2 h-[90%] mx-auto mt-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="stats stats-vertical bg-neutral text-base-100 lg:stats-horizontal shadow min-h-[125px]">
            <div className="stat">
              <div className="stat-title text-base-200">Today's Sales</div>
              <div className="stat-value">{val.dailySales}</div>
            </div>

            <div className="stat">
              <div className="stat-title text-base-200">Monthly Sales</div>
              <div className="stat-value">{val.monthlySales}</div>
            </div>
          </div>
          <div className="stats stats-vertical bg-neutral text-base-100 lg:stats-horizontal shadow min-h-[125px]">
            <div className="stat">
              <div className="stat-title text-base-200">Vegetarian Items</div>
              <div className="stat-value">{val.veg}</div>
            </div>
            <div className="stat">
              <div className="stat-title text-base-200">
                Non-vegetarian Items
              </div>
              <div className="stat-value">{val.nonVeg}</div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="stats stats-vertical bg-neutral text-base-100 lg:stats-horizontal shadow min-h-[125px]">
            <div className="stat">
              <div className="stat-title text-base-200">Total Orders</div>
              <div className="stat-value">{val.totalOrders}</div>
            </div>

            <div className="stat">
              <div className="stat-title text-base-200">Total Customers</div>
              <div className="stat-value">{val.users}</div>
            </div>
          </div>
          <div className="stats stats-vertical bg-neutral text-base-100 lg:stats-horizontal shadow min-h-[125px]">
            <div className="stat">
              <div className="stat-title text-base-200">Total Menu Items</div>
              <div className="stat-value">{val.totalMenu}</div>
            </div>
            <div className="stat">
              <div className="stat-title text-base-200">
                Total Inventory Items
              </div>
              <div className="stat-value">{val.totalInventory}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto mt-10">
            <h1 className="text-3xl font-semibold text-center">Top Selling Items</h1>
            <table className="table table-zebra table-lg">
              <thead>
                <tr className="font-semibold text-lg">
                  <th></th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {topItems.map((item, key) => {
                  return (
                    <tr key={key} className="font-semibold">
                      <th>{key + 1}</th>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTransaction;
