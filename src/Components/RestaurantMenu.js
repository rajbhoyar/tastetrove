import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"; // Import the custom hook
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const { resId } = useParams();
  const { restaurant, menuItems, isLoading } = useRestaurantMenu(resId); // Use the custom hook

  return (
    <div>
      {isLoading ? (
        <Shimmer />
      ) : (
        <>
          {restaurant ? (
            <div>
              <h1>{restaurant.name}</h1>
              <p>
                {restaurant.cuisines.join(", ")} -{" "}
                {restaurant.costForTwoMessage}
              </p>
            </div>
          ) : (
            <div>Restaurant not found</div>
          )}
          <div>
            <h2>Menu</h2>
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  {item.name} -{" "}
                  {item.price ? `₹${(item.price / 100).toFixed(2)}` : "N/A"}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default RestaurantMenu;
