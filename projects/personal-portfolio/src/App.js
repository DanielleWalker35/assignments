import React from 'react';

import { Switch, Route } from "react-router-dom";

import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from "./Projects/Projects";


function App() {
    return (
        <div className="app-wrapper">
            <Header className="mainHeader"></Header>
            <div className="leftHome">
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path='/'
                            component={Home}/>
                    </Switch>
                </div>
            </div>
            <About />
            <Projects className="projectsWrapper" />

        </div>
    )
}
export default App;