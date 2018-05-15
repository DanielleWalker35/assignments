import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="navBar">
                <Link className="leftLinks homeLink" to="/">Home</Link>
                <a className="leftLinks" href={require("./documents/DanielleWalkerResume.pdf")} target="_blank">Resume</a>
            </nav>
        </header>
    )
}
export default Header;