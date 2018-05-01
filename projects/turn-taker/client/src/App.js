import React, { Component } from 'react';
import MainInputs from "./MainInputs/MainInputs.js";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {getChores} from "./redux/choresRedux"
import {getPeople} from "./redux/peopleRedux";
import AssignedChores from "./MainInputs/AssignedChores/AssignedChores";

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
                    <Route path='/assignedChores' component={AssignedChores} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(null, { getChores, getPeople })(App));