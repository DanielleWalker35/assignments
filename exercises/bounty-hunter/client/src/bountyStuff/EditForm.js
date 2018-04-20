import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editedBounty } from "../redux/reduxBounties";

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                firstName: props.firstName || "",
                lastName: props.lastName || "",
                living: props.living || true,
                bountyAmount: props.bountyAmount || 0,
                type: props.type || "default",
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = this.initialState;
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
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.props.data)
        this.props.editedBounty(this.props.id, this.state.inputs)
    }
    render() {
        const { firstName, lastName, bountyAmount, type, living } = this.state.inputs;
        return (
            <form className="editForm" onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} name="firstName" value={firstName} type="text" placeholder="First Name" />
                <input onChange={this.handleChange} name="lastName" value={lastName} type="text" placeholder="Last Name" />
                {/* <input onChange={this.handleChange} name="living" value={living}  type="text" placeholder="Living" /> */}
                <select onChange={this.handleChange} name="living" value={living} id="">
                    <option value="default">Living?</option>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </select>
                <input onChange={this.handleChange} name="bountyAmount" value={bountyAmount} type="text" placeholder="Bounty Amount" />
                {/* <input onChange={this.handleChange} name="type" value={type}  type="text" placeholder="Type" /> */}
                <select onChange={this.handleChange} name="type" value={type} id="">
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

export default connect(null, { editedBounty })(EditForm);