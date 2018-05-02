import React, { Component } from 'react'

class OnePerson extends Component {
    //add state with showModal: false,
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: this.props.name || "",
                age: this.props.age || "",
                image: this.props.image || ""
            },
            showModal: false
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    //onclick changes showModal in state to true
    handleClick(event) {
        this.setState({
            showModal: true
        })
    }
    handleClickClose(event) {
        if (!event.target.classList.contains("closeModal")) return;
        this.setState({
            showModal: false
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.editPerson(this.state.inputs, this.props._id);
        this.setState({ showModal: false })
    }

    render() {
        const { showModal } = this.state;
        const { name, age, image } = this.state.inputs;
        const styles = {
            display: showModal ? "initial" : "none"
        }
        // console.log(this.state.inputs);
        // console.log(this.props._id); 
        return (
            <div className="onePersonWrapper">
                <div className="personNameAgeDiv">
                    <h2>{this.props.name}</h2>
                    <p>Age: {this.props.age}</p>
                    <button className="editButton" onClick={this.handleClick}>Edit</button>
                </div>
                <div className="crop">
                    <img src={this.props.image} alt="" />
                </div>
                <button onClick={() => this.props.deletePerson(this.props._id)} className="deleteButton"></button>
                <div style={styles} onClick={this.handleClickClose} className="backgroundModal closeModal">
                    <div className="boxForModal">
                        <h1>Edit:</h1>
                        <form className="editForm"onSubmit={this.handleSubmit}>
                            <input onChange={this.handleChange} name="name" value={name} placeholder="Name" type="text" />
                            <input onChange={this.handleChange} name="age" value={age} placeholder="Age" type="text" />
                            <input onChange={this.handleChange} name="image" value={image} placeholder="Image URL" type="text" />
                            <button className="saveButton">Save Changes</button>
                            <button className="closeModal deleteButton" onClick={this.handleClickClose}></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default OnePerson;