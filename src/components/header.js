import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/styles.css"
import logod4 from "../assets/images/d4logo.png";
import banner from "../assets/images/banner.jpg";

const Header = () => {
  return (
    <header>
      <img src={banner} alt="Bannière Lilith Diablo4"/>
      <div className="logo-div">
        <img src={logod4} alt="Logo Diablo4"></img>
        <h1>Planner Fr</h1>
      </div>
      <nav className="nav-div">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Barbare
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Sorcier"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Sorcier
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Necromancien"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Necromancien
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Druide"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Druide
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Voleur"
              className={({ isActive }) => {
                return isActive ? "nav-link active-link" : "nav-link";
              }}
            >
              Voleur
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
