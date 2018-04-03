import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                firstName: "",
                lastName: "",
                email: "",
            },
            //you can use this to map through and do this with superheros
            people: []
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        //take the value from the input, and set state accordingly
        const { value, name } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    //this is event.target.name : event.target.value
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
                people: [...prevState.people, prevState.inputs]
            }
        })
    };



    render() {
        return (    
            <form onSubmit={this.handleSubmit}>
                <input name="firstName" onChange={this.handleChange} value={this.state.inputs.firstName} type="text" placeholder="Enter Name" />
                <input name="lastName" onChange={this.handleChange} value={this.state.inputs.lastName} type="text" placeholder="Enter Last Name" />
                <input name="email" onChange={this.handleChange} value={this.state.inputs.email} type="email" placeholder="@Email" />
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;