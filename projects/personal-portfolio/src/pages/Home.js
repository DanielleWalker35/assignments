import React from 'react'
import ScrollToLocation from '../ScrollToLocation';


function Home(props) {

    return (
         
        <ScrollToLocation x={0} y={0}>
            <div className="home">
                <h1>Danielle Walker</h1>
                <h2>Web Developer</h2>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/daniellefacerwalker/" target="_blank" className="linkedIn iconBox"></a>
                    <a href="https://github.com/DanielleWalker35" target="_blank" className="gitHub iconBox"></a>
                </div>
                <p className="downArrow">&#x2b07;</p>
            </div>
        </ScrollToLocation>
    )
}

export default Home;