import React, { useEffect } from "react";
import { useParams } from "react-router";
import { RESTAURANT_DEATIL_URL } from "./constants";

function RestaurentView() {
  const params = useParams();
  console.log("parameters objects ", params);

  useEffect(() => {
    fetchRestaurantDeatil();
  });
  async function fetchRestaurantDeatil() {
    try {
      let url = RESTAURANT_DEATIL_URL + params.id;
      console.log(url);
      const data = await fetch(url);
      console.log("Response status:", data.status);

      if (!data.ok) {
        console.error("Network error:", res.status);
        return;
      }
      const json_data = await data.json();
      console.log(json_data);
    } catch (e) {
      console.log(e);
    }
  }
  return;
}

export default RestaurentView;
