import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import omg from "../assets/item-2.png";

const MenuCard = ({ items }) => {
  const navigate = useNavigate();

  const [selectedList, setSelectedList] = useState([]);
  const [getQuantity, setQuantity] = useState({});

  const menuFunc = (id) => {
    if (!selectedList.includes(id)) {
      setSelectedList([...selectedList, id]);
    } else {
      const { [id]: removed, ...newQuantity } = getQuantity;
      setQuantity(newQuantity);
      setSelectedList(selectedList.filter((item) => item !== id));
    }
  };

  const quantityFunc = (id, num) => {
    if (selectedList.includes(id)) {
      setQuantity((prevQuantity) => ({
        ...prevQuantity,
        [id]: num,
      }));
    }
  };

  useEffect(() => {
    sessionStorage.setItem("selectedList", JSON.stringify(selectedList));
    sessionStorage.setItem("getQuantity", JSON.stringify(getQuantity));
  }, [selectedList, getQuantity]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[70vw] gap-4 justify-items-center">
      {items.map((menuItem) => {
        const { id, title, price } = menuItem;
        const [checked, setChecked] = useState(selectedList.includes(id));

        return (
          <article
            key={id}
            className="menu-item w-72 shadow-xl bg-primary rounded-lg overflow-hidden"
          >
            <img
              src={omg}
              alt={title}
              className="w-full h-64 object-contain object-center"
            />
            <div className="p-4 bg-accent">
              <h2 className="font-bold text-xl mb-2 text-white">{title}</h2>
              <div className="flex justify-between py-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={checked}
                  onClick={() => {
                    menuFunc(id);
                    quantityFunc(id, 1);
                    setChecked(!checked);
                  }}
                />
                {checked ? (
                  <input
                    type="number"
                    className="w-10 h-6 rounded-lg input-primary bg-primary text-center font-semibold"
                    onBlur={(e) => {
                      quantityFunc(id, e.target.value);
                    }}
                   
                  />
                ) : null}
                <label className="text-white font-semibold">Add to cart</label>
              </div>

              <div className="flex justify-between">
                <span className="text-white">{`Nu.${price}`}</span>
                <button
                  onClick={() => {
                    navigate("/my-cart");
                  }}
                  className="glass hover:bg-primary text-white font-bold py-2 px-4 rounded"
                >
                  Cart
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
