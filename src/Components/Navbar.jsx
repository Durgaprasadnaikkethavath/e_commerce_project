import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <Link to="#">
          <h1 className="tinos-regular tinos-bold tinos-regular-italic tinos-bold-italic">
            kdpn mart
          </h1>
        </Link>
        <ul className="navbar_1">
          <NavLink to="#" className="nav_link">
            Home
          </NavLink>
          <NavLink to="#" className="nav_link">
            Collection
          </NavLink>
          <NavLink to="#" className="nav_link">
            About
          </NavLink>
          <NavLink to="#" className="nav_link">
            Contact
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
