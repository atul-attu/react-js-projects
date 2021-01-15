import React from 'react';
import logo from '../../logo.png';
import "./navbar.css";

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="" className="logo-img" />
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        home
                    </a>
                </li>

                <li>
                    <a href="/" className="nav-link">
                        about
                    </a>
                </li>

                <li>
                    <a href="/" className="nav-link active">
                        tours
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;