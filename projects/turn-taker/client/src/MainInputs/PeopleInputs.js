import React, { Component } from 'react';
import { connect } from "react-redux";
import { getPeople, addPerson, editPerson, deletePerson } from "../redux/peopleRedux";
import OnePerson from "./OnePerson"
import { Link } from "react-router-dom";


class PeopleInputs extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: "",
                age: "",
                image: ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    }
    componentDidMount() {
        // this.props.getPeople();
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addPerson(this.state.inputs);
        this.setState(this.initialState)
    }

    render() {
        const { name, age, image } = this.state.inputs;
        const peopleList = this.props.personData.map(person => <OnePerson key={person._id} editPerson={this.props.editPerson} deletePerson={this.props.deletePerson} {...person} />)
        const { loading, errMsg } = this.props;
        if (loading) {
            return (
                <div className="loading">...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div className="peopleInputsWrapper">
                    <h1 className="peopleTitle">Who is available for chores?</h1>
                    <form className="inputForm" onSubmit={this.handleSubmit} action="">
                        <input onChange={this.handleChange} name="name" value={name} placeholder="Name" type="text" />
                        <input onChange={this.handleChange} name="age" value={age} placeholder="Age" type="text" />
                        <input onChange={this.handleChange} name="image" value={image} placeholder="Image URL" type="text" />
                        <button className="submitButton">Submit</button>
                    </form>
                    <div className="peopleWrapper">
                        {/* <h2>Available for chores</h2> */}
                        {peopleList}
                    </div>
                    <Link className="finishPeople" to="/">Finish</Link>
                </div>
            )
        }
    }
}
const mapStateToProps = state => {
    return state.people;
}
export default connect(mapStateToProps, { getPeople, addPerson, editPerson, deletePerson })(PeopleInputs);