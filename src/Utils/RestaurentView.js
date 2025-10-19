import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { createContext } from "react";
import { addTocart, removeItem, clearCart } from "./cartSlice";
import { RESTAURANT_DEATIL_URL } from "./constants";
import Accordian from "./Accordian";

function RestaurentView() {
  const params = useParams();
  const [menuList, setMenuList] = useState([]);
  const [showIndex, setShowIndex] = useState(0);
  const dispatch = useDispatch();
  console.log("parameters objects ", params);
  const arr = new Array(10).fill(0);
  useEffect(() => {
    fetchRestaurantDeatil();
  }, [params]);
  //remember how we have handles data fetching and then hadnling
  async function fetchRestaurantDeatil() {
    try {
      const url = RESTAURANT_DEATIL_URL + params.id;
      console.log("Fetching:", url);

      const res = await fetch("https://dummyjson.com/recipes");
      console.log("Response status:", res.status);

      if (!res.ok) {
        console.error("Network error:", res.status);
        return;
      }

      // Read raw text first (instead of directly parsing JSON)
      const text = await res.text();

      if (!text) {
        console.warn("Empty response body — nothing to parse");
        return;
      }

      let json_data;
      try {
        json_data = JSON.parse(text);
        setMenuList(json_data.recipes);
      } catch (parseError) {
        console.error("Response was not valid JSON:", parseError);
        console.log("Raw response:", text);
        return;
      }
    } catch (e) {
      console.error("Fetch failed:", e);
    }
    console.log(menuList);
  }

  return menuList.length === 0 ? (
    <>
      <h1>No data found</h1>
      {arr.map((ele, index) => {
        return (
          <Accordian
            key={index}
            index={index}
            setShowIndex={setShowIndex}
            showIndex={showIndex}
            open={index === showIndex ? true : false}
          />
        );
      })}
    </>
  ) : (
    <div className="restaurant-view">
      {menuList.map((ele) => {
        return (
          <div key={ele.id} className="restaurant-view-container">
            <button
              onClick={() => {
                dispatch(addTocart(ele));
              }}
            >
              ADD TO CART
            </button>
            <h1>{ele.name}</h1>
            <h2>{ele.cuisine}</h2>
            <img src={ele.image} />
            <div className="restaurant-view-ingredient">
              {ele.ingredients.map((ele2, ind) => {
                return <h5 key={ind}>{ele2}</h5>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RestaurentView;
