import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
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

  async function getRestaurants() {
    try {
      const response = await fetch(FETCH_RESTAURANTS);
      const json = await response.json();

      const restaurantData = json?.data?.cards
        ?.flatMap(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
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
      setListOfRestaurants(uniqueRestaurants);
      setFilteredRestaurants(uniqueRestaurants);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setIsLoading(false);
    }
  }

  if (onlineStatus === false) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">
        <h1 className="text-xl text-red-600 font-semibold">
          Looks like you're offline! Please check your internet connection.
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between mb-8 p-6 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-3 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="mt-4 md:mt-0 md:ml-4 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
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
          <button
            className="mt-4 md:mt-0 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {isLoading
            ? Array.from({ length: 18 }, (_, index) => (
                <div
                  key={`shimmer-${index}`}
                  className="shimmer w-full max-w-[320px] h-[550px] bg-gray-200 rounded-lg shadow-md"
                >
                  <div className="w-full h-3/5 bg-gray-300 rounded-t-lg"></div>
                  <div className="p-4 h-2/5">
                    <div className="w-1/2 h-6 bg-gray-300 mb-4 rounded"></div>
                    <div className="w-full h-4 bg-gray-300 mb-2 rounded"></div>
                    <div className="w-2/3 h-4 bg-gray-300 mb-2 rounded"></div>
                    <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))
            : filteredRestaurants.map((restaurant) => (
                <Link
                  to={"/restaurants/" + restaurant.info.id}
                  key={restaurant.info.id}
                  className="block"
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
    </div>
  );
}

export default Body;
