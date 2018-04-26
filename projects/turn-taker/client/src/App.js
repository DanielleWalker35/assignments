import React from 'react';
import MainInputs from "./MainInputs/MainInputs.js";
import { Switch, Route } from "react-router-dom";
import AssignedChores from "./MainInputs/AssignedChores/AssignedChores";

function App() {
    return (
        <div>
            {/* <MainInputs></MainInputs> */}
            <Switch>
                <Route path='/' component={MainInputs} />
                <Route path='/assignedChores' component={AssignedChores} />
            </Switch>
        </div>
    )
}

export default App;