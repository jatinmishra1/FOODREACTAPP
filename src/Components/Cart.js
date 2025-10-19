import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../Utils/cartSlice";
function Cart() {
  const dispatch = useDispatch();

  //always seelct the exact leg of store so that you will not fetch unneccessary data ,as in huge data it will lead
  //to bad performances,so please keep this in mind
  //do not do like const ---> data=useSelector((store)=>store) --> as in thi you are selecting whole store,and if somethings
  //happens to anythig in stor e,will render your component also ,so always keep in mind
  const data = useSelector((store) => store.cart.items);
  if (data.length === 0) return <>please add something in the cart</>;
  return (
    <div className="cart-container">
      <button
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        CLEAR CART
      </button>
      {data.map((ele, index) => {
        return (
          <div key={index} className="cart-container-ietm">
            <div className="cart-container-ietm-div">
              <h3>{ele.name}</h3>
              <button
                onClick={() => {
                  dispatch(removeItem(index));
                }}
              >
                clear{" "}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
