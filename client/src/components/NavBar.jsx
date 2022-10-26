import React from "react";

const NavBar = () => {
  return (
    <nav>
      <img
        src={require("../images/airbnb-logo.png")}
        alt="AirBnb Logo"
        className="nav--logo"
      />
    </nav>
  );
};

export default NavBar;
