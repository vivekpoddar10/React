import Resturant from "./resturant";
import REST_LIST from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [restList, setResList] = useState(REST_LIST);

  /**
   * similar to
   *    let restList = REST_LIST;
   */

  return (
    <div className="body">
      <div className="filter">
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
              REST_LIST.filter((value) => value.rating > 4).sort(function (
                first,
                second
              ) {
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
          <Resturant {...resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
