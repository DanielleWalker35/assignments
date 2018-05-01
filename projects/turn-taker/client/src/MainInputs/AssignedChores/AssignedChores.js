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
            // people:[],
            // assignedPeopleIds: this.props.people.personData,
        }
        this.state = this.initialState;
        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount() {
    //     this.props.getChores();
    //     this.props.getPeople();
    // }
    handleClick(choreId, ageLevel) {
        let currentId = "";
        let currentAssignedNum = 0;
        function assignChore(arr1, ageLevel) {
            let oldEnough = arr1.filter(user => user.age >= ageLevel)
            // console.log(oldEnough);
            let byAssignedCount = oldEnough.sort((left, right) => left.assigned > right.assigned)
            // console.log(byAssignedCount);
            currentId = byAssignedCount[0]._id;
            currentAssignedNum = byAssignedCount[0].assigned +1;
            // console.log(currentId);
            // console.log(currentAssignedNum);
            // for (let i = 0; i < arr1.length; i++) {
            //     if (arr1[i].age < ageLevel) {
            //         console.log("am i hitting this if??")
            //         continue
            //     } else if (arr1[i].age >= ageLevel && arr1[i].assigned === 0) {
            //         console.log("I am in the second if statement")
            //         arr1[i].assigned++;
            //         currentAssignedNum = arr1[i].assigned;
            //         currentId = arr1[i]._id;  
            //         return
            //     } else if (arr1[i].age >= ageLevel && arr1[i].assigned > 0) {

            //         console.log("I am here the third if statement")
            //         arr1.sort((a, b) => {
            //             return b.assigned - a.assigned
            //         })
            //         let assignedObject = arr1[0];
            //         arr1[0].assigned++;
            //         currentAssignedNum = arr1[0].assigned;
            //         currentId = assignedObject._id;
            //         return
            //     }
            // }
        }
        assignChore(this.props.people.personData, ageLevel);
        // console.log(currentAssignedNum);
        // console.log(this.state.assignedPeopleIds);
        this.props.addAssigned(choreId, currentId, currentAssignedNum);
        this.props.editPerson({ assigned: currentAssignedNum }, currentId);

    }
    render() {
        const choresList = this.props.chores.choreData.map(chore => <OneChoreList key={chore._id} assignChore={this.handleClick} {...chore} />)
        return (
            <div>
                {choresList}
                <Link to="/">Home</Link>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, { getChores, addAssigned, getPeople, editPerson })(AssignedChores);