import React from "react";

const Resturant = (props) => {
  const { resturantName, item, price, rating } = props;
  return (
    <div className="resturant">
      <div className="food-image"></div>
      <div className="food-info">
        <div className="food-res">
          <div className="res">{resturantName}</div>
          <div className="food">{item}</div>
        </div>
        <div className="price-rating">
          <div className="price">{price}</div>
          <div className="rating">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Resturant;
