import React from "react";

function RestaurantCardWithLabel(Component) {
  return (props) => {
    return (
      <div className="promoted-card">
        <label className="card-promoted-label">PROMOTED</label>
        <Component {...props} />
      </div>
    );
  };
}

export default RestaurantCardWithLabel;
