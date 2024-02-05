import Resturant from "./resturant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("Body Rendered");
  const [restList, setResList] = useState([]);
  const [filterRest, setFilterRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRest(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(fetchData, []);

  if (restList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          placeholder="Search Resturant.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          onClick={() => {
            console.log(searchText);
            setResList(
              restList.filter((resturant) =>
                resturant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
        <button
          className="filterBtn"
          onClick={() => {
            /**
             * updating the restList with the array returned by filter function
             * to update call setResList and pass the new data
             * we can not do resList = REST_LIST.filter((value) => value.rating > 4);
             * when we do this, and use resList inside other div, changes will not be shown
             */
            setResList(
              restList
                .filter((value) => value.info.avgRating >= 4.5)
                .sort(function (first, second) {
                  if (first.rating > second.rating) {
                    return -1;
                  } else {
                    return 1;
                  }
                })
            );
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="resturant-list">
        {restList.map((resturant) => (
          <Resturant info={resturant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
