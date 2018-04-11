import React from 'react'
import { Link } from 'react-router-dom';

function Home(props) {
    // const crimeFacts = ["The overall crime rate in the 30 largest cities in 2017 is estimated to decline slightly from 2016, falling by 2.7 percent.", "The violent crime rate is estimated to decrease slightly from 2016, by 1.1 percent, essentially remaining stable.", "The 2017 murder rate in the 30 largest cities is estimated to decline by 5.6 percent. Large decreases this year in Chicago (down 11.9 percent) and Detroit (down 9.8 percent), as well as small decreases in other cities, contributed to this decline. New York City’s murder rate will also decline again, to 3.3 killings per 100,000 people.", "Some cities are projected to see their murder rates rise, including Charlotte (54.6 percent) and Baltimore (11.3 percent). These increases suggest a need to better understand how and why murder is increasing in some cities."]
    // const aCrimeFact = crimeFacts[Math.floor(Math.random() * crimeFacts.length)];
    // console.log(aCrimeFact);
    return (
        <div>
            <h1>Find A Farmer's Market</h1>
            <h3>Pic or something else</h3>
            <Link to="/farmersMarkets"><button>Click to Find A Farmer's Market</button></Link>
            <Link to="/nationalLocations"><button>Nationally</button></Link> 
        </div>
    )
}
export default Home;