import RestaurantCard from "./RestaurantCard";
import resList from "../utills/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRes, setListRes] = useState(resList);

  const filterTopRated = () => {
    const filterList = resList.filter((res) => res.info.avgRating > 4);
    setListRes(filterList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
