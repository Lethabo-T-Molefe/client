import React from "react";
import "../styles/NavBar.css"; // Import your CSS for styling
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
     <div className="container-fluid">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                <ul className="col-md-3 mb-2 mb-md-0"></ul>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link px-2 link-secondary">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link px-2 link-secondary">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link px-2 link-secondary">
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link px-2 link-secondary">
                            Services
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
  );
};

export default NavBar;
