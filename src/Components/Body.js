import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FETCH_RESTAURANTS } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    getRestaurants();
  }, [onlineStatus]);

  // Function to fetch restaurants data from the API
  async function getRestaurants() {
    try {
      const response = await fetch(FETCH_RESTAURANTS);
      const json = await response.json();

      // Extract restaurant data
      const restaurantData = json?.data?.cards
        ?.flatMap(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        ) // provides array of restaurants, and combines all of them to one array
        ?.filter((restaurant) => restaurant !== undefined);

      function getUniqueRestaurants(restaurants) {
        const seenIds = new Set();
        return restaurants.filter((restaurant) => {
          if (seenIds.has(restaurant.info.id)) {
            return false;
          }
          seenIds.add(restaurant.info.id);
          return true;
        });
      }

      const uniqueRestaurants = getUniqueRestaurants(restaurantData);
      console.log(uniqueRestaurants);
      setListOfRestaurants(uniqueRestaurants);
      setFilteredRestaurants(uniqueRestaurants);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setIsLoading(false);
    }
  }

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border  border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = filteredRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {isLoading
          ? Array.from({ length: 18 }, (_, index) => (
              <Shimmer key={`shimmer-${index}`} />
            ))
          : filteredRestaurants.map((restaurant, index) => (
              <Link
                to={"/restaurants/" + restaurant.info.id}
                key={`${restaurant.info.id}-${index}`} // Combine ID with index to ensure uniqueness
              >
                {restaurant.info.avgRating > 4.5 ? (
                  <RestaurantCardPromoted resData={restaurant.info} />
                ) : (
                  <RestaurantCard resData={restaurant.info} />
                )}
              </Link>
            ))}
      </div>
    </div>
  );
}

export default Body;
