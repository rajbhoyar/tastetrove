import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL } from "../utils/constants";

function RestaurantMenu() {
  const { resId } = useParams();
  const { restaurant, menuItems, isLoading } = useRestaurantMenu(resId);

  // Function to group items by category
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
            <div className="bg-white shadow-xl rounded-lg mx-auto my-8 overflow-hidden max-w-5xl border border-gray-200">
              <div className="relative w-full h-64">
                <img
                  src={
                    CDN_URL + restaurant.cloudinaryImageId ||
                    "https://via.placeholder.com/1200x800"
                  }
                  alt={`${restaurant.name} Banner`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              </div>
              <div className="relative p-6 bg-white">
                <h1 className="font-extrabold text-4xl mb-2 text-gray-900">
                  {restaurant.name}
                </h1>
                <p className="text-lg text-gray-700 mb-2">
                  {restaurant.cuisines.join(", ")} -{" "}
                  {restaurant.costForTwoMessage}
                </p>
                <p className="text-gray-600">
                  {restaurant.labels[1]?.message || "Address not available"}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-red-600 font-bold">Restaurant not found</div>
          )}
          <div className="my-8">
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
