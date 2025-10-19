import { useContext } from "react";
import UserDataContext from "../Utils/UserDataContext";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const { useData, setUserData } = useContext(UserDataContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("cart details", cart);
  return (
    <div className="header">
      <div className="header-right">
        <img className="img-logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="header-left">
        <ul className="header-left-list">
          <span>{useData.personalInfo.villlage.name}</span>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/cart">CART-{cartItems.length}</Link>
        </ul>
        <button className="btn">Login</button>
      </div>
    </div>
  );
};
export default Header;
