import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { useStateValue } from "./StateProvider";


function Header() {

  const [{basket}] = useStateValue();

  console.log(basket);
  return (
    <nav className="header">
      {/*logo on the left  */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/donate/f/fd/Amazon-logo-white.svg"
          alt=""
        />
      </Link>{" "}
      {/* href causes a refresh while Link do not/*}
      {/* search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 3links */}
      <div className="header_nav">
        {/* 1 st link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello</span>
            
            <span className="header_optionLineTwo">Log In</span>
          </div>
        </Link>
        {/* 2 st link */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Reutrns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3 st link */}
        <Link to="/ " className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4 st link */}
      </div>
      <Link to="/checkout"  className="header_link">
        <div className="header_optionBasket">
          {/* Shopping basket icon */}
          <ShoppingBasketIcon />
          {/* Number of items in the basket */}
          <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
      </Link>
      {/* basket icon with number */}
    </nav>
  );
}

export default Header;
