import React from "react";
import RestaurentCard from "../Utils/RestaurentCard";

function Shimmer() {
  return (
    <>
      <div className="shimmer-ui">
        <RestaurentCard className="shimmer-ui-card" />
        <RestaurentCard className="shimmer-ui-card" />
        <RestaurentCard className="shimmer-ui-card" />
        <RestaurentCard className="shimmer-ui-card" />
      </div>
    </>
  );
}

export default Shimmer;
