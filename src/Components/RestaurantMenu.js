import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"; // Import the custom hook
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const { resId } = useParams();
  const { restaurant, menuItems, isLoading } = useRestaurantMenu(resId); // Use the custom hook

  // Function to group items by category and calculate counts
  const groupByCategory = (items) => {
    return items.reduce((acc, item) => {
      const { category } = item;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
  };

  // Prepare categories with item counts
  const categories = Object.entries(groupByCategory(menuItems)).map(
    ([category, items]) => ({
      category,
      items,
      count: items.length,
    })
  );

  return (
    <div className="text-center">
      {isLoading ? (
        <Shimmer />
      ) : (
        <>
          {restaurant ? (
            <div>
              <h1 className="font-bold my-6 text-2xl">{restaurant.name}</h1>
              <p className="font-bold text-lg">
                {restaurant.cuisines.join(", ")} -{" "}
                {restaurant.costForTwoMessage}
              </p>
            </div>
          ) : (
            <div>Restaurant not found</div>
          )}
          <div>
            {categories.map((categoryData) => (
              <RestaurantCategory
                key={categoryData.category}
                categoryData={categoryData}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default RestaurantMenu;
