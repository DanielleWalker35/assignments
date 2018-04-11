import React from 'react'

import {Switch, Route} from "react-router-dom";

import Home from "./Home"
import NationalLocations from "./NationalLocations/NationalLocations";
import FarmersMarkets from "./FarmersMarkets/FarmersMarkets";

function App(props){
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/farmersMarkets' component={FarmersMarkets}/>
                <Route path='/nationalLocations' component={NationalLocations}/>
            </Switch>
        </div>
    )
}
export default App;