import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getChores, addAssigned } from "../../redux/choresRedux";
import { getPeople, editPerson } from "../../redux/peopleRedux"
import OneChoreList from "./OneChoreList";


class AssignedChores extends Component {
    constructor(props) {
        super(props);
        this.initialState = {

        }
        this.state = this.initialState;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(choreId, ageLevel) {
        let currentId = "";
        let currentAssignedNum = 0;
        function assignChore(arr1, ageLevel) {
            let oldEnough = arr1.filter(user => user.age >= ageLevel)
            // console.log(oldEnough);
            let byAssignedCount = oldEnough.sort((left, right) => left.assigned > right.assigned)
            // console.log(byAssignedCount);
            currentId = byAssignedCount[0]._id;
            currentAssignedNum = byAssignedCount[0].assigned + 1;

        }
        assignChore(this.props.people.personData, ageLevel);
        this.props.addAssigned(choreId, currentId, currentAssignedNum);
        this.props.editPerson({ assigned: currentAssignedNum }, currentId);

    }
    render() {
        const choresList = this.props.chores.choreData.map(chore => <OneChoreList key={chore._id} assignChore={this.handleClick} {...chore} />)
        return (
            <div className="assignedWrapper">
                <div className="choreWrapper">
                    {choresList}
                </div>
                <Link className="finishPeople" to="/">Home</Link>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, { getChores, addAssigned, getPeople, editPerson })(AssignedChores);