import React, { Component } from 'react';
import { connect } from "react-redux";
import { addIssue } from "../redux/reduxIssues";

class NewIssue extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                title: "",
                description: "",
                totalVotes: 0
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.initialState;
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
        this.props.addIssue(this.state.inputs);
        this.setState(this.initialState);
    }

    render() {
        const { title, description } = this.state.inputs;
        return (
            <div>
                <h2>Add an Issue</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="title" value={title} type="text" placeholder="Title" />
                    <input onChange={this.handleChange} name="description" value={description} type="text" placeholder="Description" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default connect(null, { addIssue })(NewIssue);