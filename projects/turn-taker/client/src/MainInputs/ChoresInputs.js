import React, { Component } from 'react';
import { connect } from "react-redux";
import { getChores, addChore, editChore, deleteChore } from "../redux/choresRedux";
import OneChore from "./OneChore"
import { Link } from "react-router-dom";


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
        // this.props.getChores();
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


    render() {
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
            const { title, ageLevel, description } = this.state.inputs;
            const choresList = this.props.choreData.map(chore => <OneChore key={chore._id} editChore={this.props.editChore} deleteChore={this.props.deleteChore} {...chore} />)
            return (
                <div className="choresInputsWrapper">
                    <h1 className="choreTitle">What do you need done?</h1>
                    <form className="inputForm" onSubmit={this.handleSubmit} >
                        <input onChange={this.handleChange} name="title" value={title} placeholder="Chore" type="text" />
                        <input onChange={this.handleChange} name="description" value={description} placeholder="Description" type="text" />
                        <input onChange={this.handleChange} name="ageLevel" value={ageLevel} placeholder="Age Level" type="text" />
                        <button className="submitButton">Submit</button>
                    </form>
                    <div className="choreWrapper">
                        {choresList}
                    </div>
                    <Link className="finishChores" to="/">Finish</Link>
                </div>
            )
        }
    }
}
const mapStateToProps = state => {
    return state.chores;
}
export default connect(mapStateToProps, { getChores, addChore, editChore, deleteChore })(ChoresInputs);