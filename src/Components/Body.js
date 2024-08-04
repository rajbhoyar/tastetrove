import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FETCH_RESTAURANTS } from "../utils/constants";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

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

      setListOfRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setIsLoading(false);
    }
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
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
          className="filter-btn"
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
      <div className="res-container">
        {isLoading
          ? Array(18).fill(<Shimmer />)
          : filteredRestaurants.map((restaurant) => (
              <Link
                to={"/restaurants/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard resData={restaurant.info} />
              </Link>
            ))}
      </div>
    </div>
  );
}

export default Body;
