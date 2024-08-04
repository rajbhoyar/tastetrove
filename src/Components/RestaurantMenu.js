import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL, CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  async function fetchMenu() {
    try {
      const response = await fetch(FETCH_MENU_URL + resId);
      const json = await response.json();

      // Extract the correct data
      const cards = json?.data?.cards || [];
      let restaurantData = null;
      let menuData = [];
      // Extract restaurant and menu data from the cards array
      for (let card of cards) {
        if (card?.card?.card?.info?.id === resId) {
          restaurantData = card.card.card.info;
        }

        const menuItems = card?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.flatMap((c) => c.card?.card?.itemCards || [])
          ?.map((item) => item?.card?.info);

        if (menuItems && menuItems.length > 0) {
          menuData = [...menuData, ...menuItems];
        }
      }

      setRestaurant(restaurantData);
      setMenuItems(menuData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching menu:", error);
      setIsLoading(false);
    }
  }

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
                {restaurant.cuisines.join(",")} - {restaurant.costForTwoMessage}
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
