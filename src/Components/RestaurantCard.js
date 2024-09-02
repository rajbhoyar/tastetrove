import React from "react";
import { CDN_URL } from "../utils/constants";
import { FaStar, FaStarHalfAlt, FaStarOfDavid } from "react-icons/fa";

function RestaurantCard({ resData }) {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;

  // Function to render star icons based on the average rating
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center text-yellow-400">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-400" />
        ))}
        {halfStar && <FaStarHalfAlt key="half" className="text-yellow-400" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaStar key={`empty-${index}`} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-[320px] h-[550px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <div className="w-full h-3/5 relative">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="p-4 h-2/5 flex flex-col justify-between">
        <h3 className="font-semibold text-xl mb-2 truncate text-gray-800">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-600 mb-1 flex items-center">
          {renderRatingStars(avgRating)}
          <span className="ml-2 text-gray-600">{avgRating}</span>
        </p>
        <p className="text-sm text-gray-600">{costForTwo}</p>
      </div>
    </div>
  );
}

// HOC
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white text-xs font-semibold py-1 px-3 rounded-lg shadow-md flex items-center space-x-1 z-10">
          <FaStarOfDavid className="text-yellow-200" />
          <span>Promoted</span>
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
