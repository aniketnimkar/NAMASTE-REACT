import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utills/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  // console.log("this is", resInfo?.cards[2]?.card?.card?.info);
  // console.log(
  //   resInfo.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]
  //     ?.info?.name
  // );
  console.log(
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR?.cards[2]?.card?.card
      ?.itemCards
  );

  if (resInfo === null) return <Shimmer />;

  const name = resInfo?.cards[0]?.card?.card?.text;
  const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;
  const costForTwoMessage =
    resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;

  const itemCards =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  // const cloudinaryImageId =
  //   resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId;

  return (
    <div className="menu">
      <h1>{setResInfo?.cards?.groupedCard}</h1>
      {/* <h2>
        {cuisines.join()}-{costForTwoMessage}
      </h2> */}
      <h2>{name}</h2>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {" "}
            {item.card.info.name} Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
