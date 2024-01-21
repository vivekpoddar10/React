import React from "react";
import ReactDOM from "react-dom";

/**
 * Header
 *     - logo
 *     - nav items
 * Body
 *     - search
 *     - food item container
 *          - food image
 *          - name, rating
 *          - price
 * footer
 *     - copyright
 *     - links
 *     - address
 *     - contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="image">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1190040680/vector/plastic-bag-food-delivery-icon.jpg?s=612x612&w=0&k=20&c=rH4wx01088_bKVXSppri6XSj54ovSZDiW4fe5YhHJE8="
        ></img>
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  return <div className="resCard">
    <img src="https://t3.ftcdn.net/jpg/01/14/51/60/360_F_114516029_Z2B6FO30AB6ZR3v9WHXjpXmJScaiLtzk.jpg"></img>
    <div className="name-cuisine">
      <div>{props.resturantName}</div>
      <div>{props.item}</div>
    </div>
    <div className="price-rating">
      <div className="price">{props.price}</div>
      <div className="rating">{props.rating}⭐</div>
    </div>
  </div>;
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resturant-container">
        <ResturantCard resturantName="Meghna Foods" item="Biryani" price="350" rating="4.5"/>
      </div>
    </div>
  );
};

const AppFooter = () => {
  return <div className="appFooter"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <AppFooter />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("body"));
root.render(<AppLayout />);
