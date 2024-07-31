import React from "react";
import { CDN_URL } from "../utils/constants";

function RestaurantCard({ resData }) {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} for two</h4>
    </div>
  );
}

export default RestaurantCard;
