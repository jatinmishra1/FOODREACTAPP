import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header">
      <div className="header-right">
        <img className="img-logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="header-left">
        <ul className="header-left-list">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </ul>
        <button className="btn">Login</button>
      </div>
    </div>
  );
};
export default Header;
