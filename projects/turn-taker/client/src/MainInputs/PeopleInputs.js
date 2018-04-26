import React, { Component } from 'react';
import { connect } from "react-redux";
import { getPeople, addPerson, editPerson, deletePerson } from "../redux/peopleRedux";
import OnePerson from "./OnePerson"

class PeopleInputs extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: "",
                age: ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    }
    componentDidMount() {
        this.props.getPeople();
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
    // handleEdit(inputs, id){
    //   this.props.editPerson(inputs, id);
    // }
    // handleDelete(id){
    //     this.props.deletePerson(id);
    // }

    render() {
        const { name, age } = this.state.inputs;
        const peopleList = this.props.data.map(person => <OnePerson key={person._id} editPerson={this.props.editPerson} deletePerson={this.props.deletePerson} {...person} />)
        return (
            <div>
                <h1>Add a Person:</h1>
                <form onSubmit={this.handleSubmit} action="">
                    <input onChange={this.handleChange} name="name" value={name} placeholder="Name" type="text" />
                    <input onChange={this.handleChange} name="age" value={age} placeholder="Age" type="text" />
                    <button>Submit</button>
                </form>
                <div>
                    <h2>Available for chores</h2>
                    {peopleList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
 return state.people;
}
export default connect(mapStateToProps, { getPeople, addPerson, editPerson, deletePerson })(PeopleInputs);