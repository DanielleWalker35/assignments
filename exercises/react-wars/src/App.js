import React from 'react'
// import {Switch, Route} from 'react-router-dom';

import Header from "./Header";
import CharacterDetails from "./CharacterDetails";


function App(props) {
    return( 
        <div>
            <Header />
            <CharacterDetails />
        </div>
    )
}
export default App;