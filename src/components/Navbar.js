import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        GY<span>M</span>
      </h1>
      <ul className="links">
        <li>HOME</li>
        <li>GYM EXCERCISES</li>
      </ul>
      <ul className="icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-instagram"></i>
      </ul>
    </div>
  );
};

export default Navbar;
