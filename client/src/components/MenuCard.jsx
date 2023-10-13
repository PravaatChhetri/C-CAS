import React from 'react';
import omg from '../assets/item-2.png';

const MenuCard = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto w-[70vw] gap-4 justify-items-center">
      {items.map((menuItem) => {
        const { id, title, img, price } = menuItem;
        return (
          <article key={id} className="menu-item w-72 bg-base-100 shadow-xl bg-primary rounded-lg overflow-hidden">
            <img src={omg} alt={title} className="w-full h-64 object-contain object-center" />
            <div className="p-4 bg-accent">
              <h2 className="font-bold text-xl mb-2  text-white">{title}</h2>
              <div className="flex justify-between">
                <span className="text-white">{`Nu.${price}`}</span>
                <button className="glass hover:bg-primary text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuCard;
