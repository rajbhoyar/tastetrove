import { useState, useEffect, useCallback } from "react";
import { FETCH_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMenu = useCallback(async () => {
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
  }, [resId]);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  return { restaurant, menuItems, isLoading };
};

export default useRestaurantMenu;
