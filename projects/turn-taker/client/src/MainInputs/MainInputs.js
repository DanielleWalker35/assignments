import React from 'react';
import PeopleInputs from "./PeopleInputs";
import ChoresInputs from "./ChoresInputs";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {clearAssignments} from "../redux/choresRedux";
import {resetAssigned} from "../redux/peopleRedux";

// import AssignedChores from "./AssignedChores/AssignedChores";

function MainInputs(props) {
    const handleClick = ()=>{
        props.clearAssignments();
        props.resetAssigned();
    }
    return (
        <div>
            <header>Welcome to Turn Taker</header>
            <PeopleInputs />
            <ChoresInputs />
            <Link to="/assignedChores"><button onClick={handleClick} >Assign Chores</button></Link>
        </div>
    )
}
 const mapStateToProps = state =>{
    return state.chores
}
export default connect(mapStateToProps, {clearAssignments, resetAssigned})(MainInputs);