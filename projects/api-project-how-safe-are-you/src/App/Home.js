import React from 'react'
import { Link } from 'react-router-dom';

function Home(props) {
  //maybe do a farm fact
    return (
        <div className="homeWrapper">
            <div className="homeText">
            <h1 className="homeH1">Welcome to Farmer's Market Finder</h1>
            <h3 className="homeH3">Lets get started and find the Farmer's Market of your Dreams</h3>
            <Link to="/farmersMarkets"><button>Click to Find A Farmer's Market</button></Link>
            </div>
        </div>
    )
}
export default Home;