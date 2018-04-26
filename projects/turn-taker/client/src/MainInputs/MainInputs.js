import React from 'react';
import PeopleInputs from "./PeopleInputs";
import ChoresInputs from "./ChoresInputs";
import { Link } from "react-router-dom";
// import AssignedChores from "./AssignedChores/AssignedChores";

function MainInputs() {
    return (
        <div>
            <PeopleInputs />
            <ChoresInputs />
            <Link to="/assignedChores"><button>Assign Chores</button></Link>
        </div>
    )
}
export default MainInputs;