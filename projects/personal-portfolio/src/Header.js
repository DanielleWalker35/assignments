import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="navBar">
                <Link className="leftLinks" to="/">Home</Link>
                <Link className="leftLinks" to="/about">About</Link>
                <Link className="leftLinks" to="/resume">Resume</Link>
            </nav>
        </header>
    )
}
export default Header;