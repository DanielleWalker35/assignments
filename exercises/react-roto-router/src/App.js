import React from 'react';

import { Switch, Route } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';


function App() {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <div className="content-wrapper">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/services' component={Services} />
                </Switch>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default App;
