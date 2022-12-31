import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import LOGO from "../../images/booklogo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateprovider/StateProvider";
const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={LOGO} alt="logo" />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search book..."
        />
        <BsSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">I want to</span>
          <span className="header__optionLineTwo">Sell Book</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Know about</span>
          <span className="header__optionLineTwo">Mujhe Book Do</span>
        </div>
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Sign in</span>
            <span className="header__optionLineTwo">My Profile</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionbasket">
            <SlBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
