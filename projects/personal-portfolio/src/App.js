import React from 'react';

import { Switch, Route } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';


function App() {
    return (
        <div className="app-wrapper">
            <Header className="mainHeader"></Header>
            <div className="content-wrapper">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/resume' component={Resume} />
                </Switch>
            </div>
            <Footer className="mainFooter"></Footer>
        </div>
    )
}
export default App;