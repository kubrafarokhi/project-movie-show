import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./navBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        {/* <div className="nav-container"> */}
          <NavLink exact to="/" className="nav-logo">
            Discover
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/trend"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Trend
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/newest"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Newest
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/toprated"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                TopRated
              </NavLink>
            </li>
          </ul>
        <div>
            <SearchBar/>
          </div>
        {/* </div> */}
      </nav>
    </>
  );
}

export default NavBar;