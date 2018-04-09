import React, { Component } from 'react';

import { connect } from "react-redux";
import { addBadge } from './redux/badge.js';

class Form extends Component {
    constructor(props) {
        super();
        this.initialState = {
            inputs: {
                firstName: "",
                lastName: "",
                placeOfBirth: "",
                email: "",
                phone: "",
                favFood: "",
                comments: "",
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value,
                }

            }
        })
    }
    canBeSubmitted() {
        const { firstName, lastName, placeOfBirth, email, phone, favFood, comments } = this.state.inputs;
        const numbers =  /^[0-9]+$/;
        return (
            firstName.length > 3 && lastName.length > 3 && placeOfBirth.length > 3 && email.length > 3 && phone.match(numbers) && phone.length > 9 && favFood.length > 3 && comments.length > 3
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.canBeSubmitted) {
            return
        }
        this.props.addBadge(this.state.inputs);
        this.setState(this.initialState);
    }

    render() {
        const isEnabled = this.canBeSubmitted();
        const { firstName, lastName, placeOfBirth, email, phone, favFood, comments } = this.state.inputs
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="firstName" value={firstName} type="text" placeholder="First Name" />
                <input onChange={this.handleChange} name="lastName" value={lastName} type="text" placeholder="Last Name" />
                <input onChange={this.handleChange} name="placeOfBirth" value={placeOfBirth} type="text" placeholder="Place of Birth" />
                <input onChange={this.handleChange} name="email" value={email} type="text" placeholder="Email" />
                <input onChange={this.handleChange} name="phone" value={phone} type="text" placeholder="Phone" />
                <input onChange={this.handleChange} name="favFood" value={favFood} type="text" placeholder="Favorite Food" />
                <input onChange={this.handleChange} name="comments" value={comments} type="text" placeholder="Tell us about yourself" />
                <button id="button" disabled={!isEnabled}>Submit</button>
            </form>
        )
    }
}

export default connect(null, { addBadge })(Form);
