import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ItemList({ items }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex items-center"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.name}</span>
              <span>
                {" "}
                - ₹ {item.price ? item.price / 100 : item.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <img
              src={CDN_URL + item.imageId}
              alt="item-image"
              className="w-full h-24 object-cover rounded-md"
            />
            <button
              className="absolute bottom-2 right-2 p-2 bg-white text-green-500 shadow-md rounded-lg hover:bg-green-50 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
