import React from 'react'
import MenuCard from "../components/MenuCard";
import Categories from "../pages/Categories";
import items from "../pages/Data";
import { useState } from "react";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];


function Menu() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2 className="text-3xl text-center font-medium mb-5">Menu</h2>
          <div className="underline w-20 h-1/4 bg-secondary mx-auto"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <MenuCard items={menuItems} />
      </section>
    </main>
  );
}



export default Menu