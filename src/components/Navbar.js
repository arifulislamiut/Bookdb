import React from "react";
import {Link}from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo" style={{ marginLeft: 20 }}>
                        Book Finder
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
