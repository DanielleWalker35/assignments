import React from 'react'

import { Switch, Route } from "react-router-dom";

import Home from "./Home"
import FarmersMarkets from "./FarmersMarkets/FarmersMarkets";
import MarketInfo from "./FarmersMarkets/MarketInfo";
import SavedMarkets from "./FarmersMarkets/savedComponents/SavedMarkets";
function App(props) {
    return (
        <div className="appWrapper">
            <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/farmersMarkets' component={FarmersMarkets} />
                    <Route path='/marketInfo/:marketId' component={MarketInfo} />
                    <Route path='/savedMarkets' component={SavedMarkets} />
            </Switch>
        </div>
    )
}
export default App;