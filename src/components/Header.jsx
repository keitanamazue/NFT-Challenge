import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logoLists">
        <img className="logo" src="/cryptopunk-logo.png" alt="" />
      </div>

      <div className="inputContainer">
        <img className="inputImg" src="/search.png" alt="" />
        <input
          placeholder="collect,item or user..."
          className="input"
          type="text"
        />
      </div>

      <ul className="navList">
        <li className="nav">
          <a className="navLink" href="#">
            Drops
          </a>
        </li>
        <li className="nav">
          <a className="navLink" href="#">
            Marketplace
          </a>
        </li>
        <li className="nav">
          <a className="navLink" href="#">
            Create
          </a>
        </li>
      </ul>

      <div className="buttonLists">
        <div className="themeSwitch">
          <img className="themeSwitchImg" src="/theme-switch.png" alt="" />
        </div>
        <button className="getInButton">GET IN</button>
      </div>
    </div>
  );
}

export default Header;
