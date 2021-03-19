import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  });

  return (
    <div class={`nav ${show && "nav_black"}`}>
      <img
        className="netflix-logo"
        src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
        alt="Netflix Logo"
      ></img>

      <img
        className="avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
      ></img>
    </div>
  );
}

export default Navbar;
