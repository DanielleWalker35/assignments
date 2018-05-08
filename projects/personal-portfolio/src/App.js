import React from 'react';

import { Switch, Route } from "react-router-dom";

import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from "./pages/Contact";
import Projects from "./Projects/Projects";


function App() {
    return (
        <div className="app-wrapper">
        <Header className="mainHeader"></Header>
            <div className="leftHome">
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/resume' component={Resume} />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
                </div>
            </div>
            <About />
            <Projects className= "projectsWrapper"/>

        </div>
    )
}
export default App;