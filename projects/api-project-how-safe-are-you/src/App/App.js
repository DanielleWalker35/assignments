import React from 'react'

import {Switch, Route} from "react-router-dom";

import Home from "./Home"
import FarmersMarkets from "./FarmersMarkets/FarmersMarkets";
import MarketInfo from "./FarmersMarkets/MarketInfo";

function App(props){
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/farmersMarkets' component={FarmersMarkets}/>
                <Route path='/marketInfo/:marketId' component={MarketInfo}/> 
            </Switch>
        </div>
    )
}
export default App;