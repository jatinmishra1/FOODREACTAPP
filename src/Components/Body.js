import { useState, useEffect } from "react";
import { Link } from "react-router";
import { RESTAURANT_API } from "../Utils/constants";
import RestaurentCard from "../Utils/RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [renderingRestaurentList, setRenderingRestaurentList] = useState([]);
  const [seachText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurentData();
  }, []);

  async function fetchRestaurentData(params) {
    const data = await fetch(RESTAURANT_API);
    const json_data = await data.json();
    const restaurants_data =
      json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRenderingRestaurentList(restaurants_data);
    setRestaurentList(restaurants_data);
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
        </div>
        {renderingRestaurentList.length === 0 ? (
          <Shimmer />
        ) : (
          <>
            <div>
              <div className="restaurant-card-container">
                {renderingRestaurentList.map((ele) => {
                  return (
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
