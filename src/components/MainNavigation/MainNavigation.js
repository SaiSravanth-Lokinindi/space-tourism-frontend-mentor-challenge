import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.scss";

import logo from "../../assets/logo/logo.svg";
import { useState } from "react";

const navItems = ["Home", "Destination", "Crew", "Technology"];

const MainNavigation = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  function myFunction() {
    setShowNavigation((prevState) => !prevState);
  }
  return (
    <div className={classes["nav-container"]}>
      <img
        src={`${logo}`}
        alt="logo"
        // style={{ height: "48px", width: "48px", display: "block" }}
      />
      <nav
        className={`${classes["nav-bar"]} ${
          showNavigation ? classes["show-nav"] : ""
        }`}
      >
        <ul>
          {navItems.map((navItem, idx) => {
            return (
              <li key={navItem}>
                <NavLink
                  to={navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`}
                  className={({ isActive }) => (isActive ? classes.active : "")}
                >
                  <strong className={classes["nav-index"]}>{`0${idx}`}</strong>{" "}
                  {navItem}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        class={`${classes["burger-btn-container"]} ${classes.burger}`}
        onClick={myFunction}
      >
        <div
          class={`${classes.bar1} ${showNavigation ? classes["show-nav"] : ""}`}
        ></div>
        <div
          class={`${classes.bar2} ${showNavigation ? classes["show-nav"] : ""}`}
        ></div>
        <div
          class={`${classes.bar3} ${showNavigation ? classes["show-nav"] : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default MainNavigation;
