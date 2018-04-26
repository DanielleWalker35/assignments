import React, { Component } from 'react'

class OneChore extends Component {
    //add state with showModal: false,
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                title: this.props.title || "",
                description: this.props.description || "",
                ageLevel: this.props.ageLevel || ""
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
        this.props.editChore(this.state.inputs, this.props._id);
        this.setState({ showModal: false })
    }

    render() {
        const { showModal } = this.state;
        const { title, description, ageLevel } = this.state.inputs;
        const styles = {
            display: showModal ? "initial" : "none"
        }
        // console.log(this.state.inputs);
        // console.log(this.props._id); 
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <button onClick={this.handleClick}>Edit</button>
                <button  onClick={()=> this.props.deleteChore(this.props._id)}className="deleteButton"></button>
                <div style={styles} onClick={this.handleClickClose} className="backgroundModal closeModal">
                    <div className="boxForModal">
                        <h1>Edit:</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input onChange={this.handleChange} name="title" value={title} placeholder="Chore" type="text" />
                            <input onChange={this.handleChange} name="description" value={description} placeholder="Description" type="text" />
                            <input onChange={this.handleChange} name="ageLevel" value={ageLevel} placeholder="Age Level" type="text" />
                            <button >Save Changes</button>
                            <button className="closeModal" onClick={this.handleClickClose}>Close</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default OneChore;