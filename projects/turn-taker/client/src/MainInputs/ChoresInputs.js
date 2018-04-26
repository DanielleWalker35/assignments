import React, { Component } from 'react';
import { connect } from "react-redux";
import { getChores, addChore, editChore, deleteChore } from "../redux/choresRedux";
import OneChore from "./OneChore"

class ChoresInputs extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                title: "",
                description: "",
                ageLevel: ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    }
    componentDidMount() {
        this.props.getChores();
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
        console.log(this.state.inputs);
        event.preventDefault();
        this.props.addChore(this.state.inputs);
        this.setState(this.initialState)
    }
    // handleEdit(inputs, id){
    //   this.props.editChore(inputs, id);
    // }
    // handleDelete(id){
    //     this.props.deleteChore(id);
    // }

    render() {
        const { title, ageLevel, description } = this.state.inputs;
        const choresList = this.props.data.map(chore => <OneChore key={chore._id} editChore={this.props.editChore} deleteChore={this.props.deleteChore} {...chore} />)
        return (
            <div>
                <h1>Add a Chore:</h1>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} name="title" value={title} placeholder="Chore" type="text" />
                    <input onChange={this.handleChange} name="description" value={description} placeholder="Description" type="text" />
                    <input onChange={this.handleChange} name="ageLevel" value={ageLevel} placeholder="Age Level" type="text" />
                    <button>Submit</button>
                </form>
                <div>
                    <h2>Chores:</h2>
                    {choresList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
 return state.chores;
}
export default connect(mapStateToProps, { getChores, addChore, editChore, deleteChore })(ChoresInputs);