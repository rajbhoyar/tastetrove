import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ categoryData }) {
  const { category, items, count } = categoryData;
  const [showItems, setShowItems] = useState(true);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {category} ({count})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={items} />}
    </div>
  );
}

export default RestaurantCategory;
