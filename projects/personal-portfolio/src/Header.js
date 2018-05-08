import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="navBar">
                <Link className="leftLinks homeLink" to="/">Home</Link>
                <Link className="leftLinks about" to="/about">About</Link>
                <Link className="leftLinks resume" to="/resume">Resume</Link>
                <Link className="leftLinks contact" to="/contact">Contact Me</Link>
            </nav>
        </header>
    )
}
export default Header;