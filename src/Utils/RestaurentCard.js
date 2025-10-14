import React from "react";
import { RESTAURANT_IMAGE_URL } from "./constants";

function RestaurentCard(props) {
  const { name, cloudinaryImageId, avgRating, deliveryTime } = props;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-card-img"
        src={RESTAURANT_IMAGE_URL + cloudinaryImageId}
        alt=""
      />
      <div className="restaurant-card-list">
        <ul>
          <li>{name}</li>
          <li>{avgRating}</li>
          <li>{`Waiting Time is ${deliveryTime} minutes`}</li>
        </ul>
      </div>
    </div>
  );
}

export default RestaurentCard;
