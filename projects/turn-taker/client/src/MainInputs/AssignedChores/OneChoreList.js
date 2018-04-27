import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
// import { getAvailablePeople } from "../../redux/peopleRedux";

class OneChoreList extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            people: [],
            // assignedPeople:[],
        }
        this.state = this.initialState;
        // this.handleClick = this.handleClick.bind(this);
    }

    // on component did mount get an array of people who can perform that chore

    componentDidMount() {
        // console.log(this.props.ageLevel);
        axios.get("/people")
            .then(response => {
                this.setState({
                    people: response.data.filter(person => person.age >= this.props.ageLevel),
                    // assignedPeople: []
                })
            })
    }
   
    render(props) {
        console.log(this.state.people);
        // console.log(this.state.assignedPeople);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <p>{this.props.assignedTo}</p>
                <button onClick={()=>{this.props.assignChore(this.state.people)}}>Assign Chore</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps, {})(OneChoreList);