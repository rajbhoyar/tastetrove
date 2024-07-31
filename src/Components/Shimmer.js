// Shimmer.js
import React from "react";
import "../index.css";

function Shimmer() {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-card">
        <div className="shimmer-img"></div>
        <div className="shimmer-content">
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
