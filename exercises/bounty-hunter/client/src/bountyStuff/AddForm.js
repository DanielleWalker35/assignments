import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBounty } from "../redux/reduxBounties";


class AddForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                firstName: "",
                lastName: "",
                living: "default",
                bountyAmount: 0,
                type: "default"
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
        this.props.addBounty(this.state.inputs);
        this.setState(this.initialState);
    }
    render() {
        const { firstName, lastName, bountyAmount, type, living} = this.state.inputs;
        return (
            <form className="addForm" onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} name="firstName" value={firstName} type="text" placeholder="First Name" />
                <input onChange={this.handleChange} name="lastName" value={lastName} type="text" placeholder="Last Name" />
                {/* <input onChange={this.handleChange} name="living" value={living} type="text" placeholder="Living" /> */}
                <select onChange={this.handleChange} name="living" value={living} id="">
                    <option value="default">Living?</option>
                    <option value={true} >True</option>
                    <option value={false} >False</option>
                </select>
                <input onChange={this.handleChange} name="bountyAmount" value={bountyAmount} type="text" placeholder="Bounty Amount" />
                {/* <input onChange={this.handleChange} name="type" value={type} type="text" placeholder="Type" /> */}
                <select onChange={this.handleChange} value={type} name="type" selected id=""> Select Type
                    <option value="default">Select Type</option>
                    <option value="Grand Theft">Grand Theft</option>
                    <option value="Murder">Murder</option>
                    <option value="Kid Napping">Kid Napping</option>
                </select>
                <button>Submit</button>
            </form>
        )
    }
}
export default connect(null, { addBounty })(AddForm)