import React, { Component } from 'react';
import MainInputs from "./MainInputs/MainInputs.js";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {getChores} from "./redux/choresRedux"
import {getPeople} from "./redux/peopleRedux";
import AssignedChores from "./MainInputs/AssignedChores/AssignedChores";
import ChoresInputs from './MainInputs/ChoresInputs.js';
import PeopleInputs from './MainInputs/PeopleInputs.js';

class App extends Component {
    componentDidMount() {
        this.props.getPeople();
        this.props.getChores();
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={MainInputs} />
                    <Route path='/peopleInputs' component={PeopleInputs}/>
                    <Route path='/choresInputs' component={ChoresInputs}/>
                    <Route path='/assignedChores' component={AssignedChores} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(null, { getChores, getPeople })(App));