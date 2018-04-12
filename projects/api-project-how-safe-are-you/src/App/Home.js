import React from 'react'
import { Link } from 'react-router-dom';

function Home(props) {
  //maybe do a farm fact
    return (
        <div>
            <h1>Find A Farmer's Market</h1>
            <h3>Pic or something else</h3>
            <Link to="/farmersMarkets"><button>Click to Find A Farmer's Market</button></Link>
        </div>
    )
}
export default Home;