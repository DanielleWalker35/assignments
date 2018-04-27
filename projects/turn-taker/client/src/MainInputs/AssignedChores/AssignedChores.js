import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getChores } from "../../redux/choresRedux";
// import {getPeople} from "../../redux/peopleRedux";
import OneChoreList from "./OneChoreList";

//on Component did mount get a list of all the chores
//map through and display
class AssignedChores extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            assignedPeople: []
        }
        this.state= this.initialState;
        this.handleClick= this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getChores();
        // this.props.getPeople();
    }
    handleClick(arr1) {
        function assignChore(arr1, arr2) {
            for (let i = 0; i < arr1.length; i++) {
                if (arr2.find(person => person === arr1[i].name)) {
                    continue
                } else {
                    arr2.push(arr1[i].name)
                    return
                }
            }
            // console.log(arr2);
        }
        assignChore(arr1, this.state.assignedPeople);
        console.log(this.state.assignedPeople);
        //do an axios put request to the chore for who it is assigned to.

        //if not assign them and push to assigned array with id
        //
        //when assigning do a put request with the person.id for the assigned value

    }
    render() {
        const choresList = this.props.choreData.map(chore => <OneChoreList key={chore._id} assignChore={this.handleClick} {...chore} />)
        return (
            <div>
                {choresList}
                <Link to="/">Home</Link>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state.chores
}
export default connect(mapStateToProps, { getChores })(AssignedChores);