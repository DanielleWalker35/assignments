import React from 'react';
import NavBar from "./NavBar/NavBar"

function Header() {
   
    const overlay = {
        height: "535px",
        backgroundColor: "rgba(0, 0, 0, .5)",
    }

    return (
        <div class="headerDiv">
            <div class="overlay">
                <NavBar></NavBar>
                <div class="headingWords">
                    <h1>Clean Blog</h1>
                    <h3>A Blog Theme by  Start Bootstrap</h3>
                </div>
            </div>
        </div>
    )
}
export default Header;