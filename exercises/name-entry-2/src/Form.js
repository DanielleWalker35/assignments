import React, { Component } from 'react';
import List from "./List";

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                firstName: props.firstName || "",
            },
            names: [],
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { value, name } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value,
                }
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => {
            return {
                inputs: this.initialState.inputs,
                names: [...prevState.names, prevState.inputs],
            }
        });
    };

    render() {
        const { firstName } = this.state.inputs;
        const { names } = this.state;
        console.log(names);
        const nameLis = names.map((person, i) => <List key ={person.firstName + i} human = {person} />)
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="firstName" onChange={this.handleChange} value={firstName} type="text" placeholder="Enter Name"></input>
                <button>Submit</button>
                <h1>{firstName}</h1>
               <ol>
                {nameLis}
                </ol>
            </form>
        )
    }
}

export default Form;