import React from "react";
import { IMG_URL } from "../utils/constants";

const Resturant = (props) => {
  const { info } = props;
  const { name, locality, avgRating, costForTwo, cloudinaryImageId
  } = info;
  return (
    <div className="resturant">
      <div className="food-image">
        <img src={IMG_URL + cloudinaryImageId}></img>
      </div>
      <div className="food-info">
        <div className="food-res">
          <div className="res">{name}</div>
          <div className="food">{locality}</div>
        </div>
        <div className="price-rating">
          <div className="price">{costForTwo}</div>
          <div className="rating">{avgRating}</div>
        </div>
      </div>
    </div>
  );
};

export default Resturant;
