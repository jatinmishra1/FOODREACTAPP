import { useState, useEffect, useContext } from "react";
import UserDataContext from "../Utils/UserDataContext";
import { Link } from "react-router";
import { RESTAURANT_API } from "../Utils/constants";
import RestaurentCard from "../Utils/RestaurentCard";
import RestaurantCardWithLabel from "../Utils/RestaurantCardWithLabel";
import Shimmer from "./Shimmer";
import { produce } from "immer";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [renderingRestaurentList, setRenderingRestaurentList] = useState([]);
  const [seachText, setSearchText] = useState("");
  const { useData, setUserData } = useContext(UserDataContext);

  const LabeledRestaurentCard = RestaurantCardWithLabel(RestaurentCard);

  useEffect(() => {
    fetchRestaurentData();
  }, []);

  async function fetchRestaurentData(params) {
    try {
      const data = await fetch(RESTAURANT_API);
      const json_data = await data.json();
      const restaurants_data =
        json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRenderingRestaurentList(restaurants_data);
      setRestaurentList(restaurants_data);
    } catch (e) {
      console.log(e);
    }
  }
  function filterRestaurantList() {
    if (seachText.length === 0) {
      setRenderingRestaurentList(restaurentList);
      return;
    }
    const newList = restaurentList.filter((ele) => {
      return ele?.info?.name?.toLowerCase().includes(seachText.toLowerCase());
    });
    setRenderingRestaurentList(newList);
  }
  return (
    <>
      <div>
        <div className="body-serach-box">
          <input
            type="text"
            value={seachText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={filterRestaurantList}>Seach</button>
          <input
            onChange={(e) => {
              setUserData((prevstate) => {
                const nextState = produce(prevstate, (draft) => {
                  draft.personalInfo.villlage.name = e.target.value;
                });
                return nextState;
              });
            }}
          />
        </div>
        {renderingRestaurentList.length === 0 ? (
          <Shimmer />
        ) : (
          <>
            <div>
              <div className="restaurant-card-container">
                {renderingRestaurentList.map((ele, index) => {
                  return index % 2 === 0 ? (
                    <LabeledRestaurentCard
                      key={ele?.info?.id}
                      name={ele?.info?.name}
                      cloudinaryImageId={ele?.info?.cloudinaryImageId}
                      avgRating={ele?.info?.avgRating}
                      deliveryTime={ele?.info?.sla?.deliveryTime}
                    />
                  ) : (
                    <Link
                      key={ele?.info?.id}
                      to={`/restaurent/${ele?.info?.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <RestaurentCard
                        name={ele?.info?.name}
                        cloudinaryImageId={ele?.info?.cloudinaryImageId}
                        avgRating={ele?.info?.avgRating}
                        deliveryTime={ele?.info?.sla?.deliveryTime}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Body;
