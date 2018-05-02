import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {clearAssignments} from "../redux/choresRedux";
import {resetAssigned} from "../redux/peopleRedux";

function MainInputs(props) {
    const handleClick = ()=>{
        props.clearAssignments();
        props.resetAssigned();
    }
    return (
        <div className="homeWrapper">
            <header>Turn Taker</header>
            <Link className="homeLink" to="/peopleInputs">Enter People</Link>
            <Link className="homeLink" to="/choresInputs">Enter Chores</Link>
            <Link className="homeLink" to="/assignedChores" onClick={handleClick}> Assign Chores</Link>
        </div>
    )
}
 const mapStateToProps = state =>{
    return state.chores
}
export default connect(mapStateToProps, {clearAssignments, resetAssigned})(MainInputs);