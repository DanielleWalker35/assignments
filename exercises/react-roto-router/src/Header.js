import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <h1>
                <p className="headerText">Flush Away Your Problems Plumbing</p>
            </h1>
            <nav className="navBar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </nav>
        </header>
    )
}
export default Header;