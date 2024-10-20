import React from "react";
import "../styles/NavBar.css"; // Import your CSS for styling
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="navigation-container">
      <header className="navigation-header">
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="/" className="navigation-link">
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/reviews" className="navigation-link">
              Reviews
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/bookings" className="navigation-link">
               Bookings
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/services" className="navigation-link">
              Services
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
