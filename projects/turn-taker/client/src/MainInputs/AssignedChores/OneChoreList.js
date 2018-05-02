import React, { Component } from 'react';

class OneChoreList extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            showFireworks: false
        };
        this.state = this.initialState;
        this.handleClick = this.handleClick.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
    }
    handleClick(event) {
        this.setState({
            showFireworks: true
        })
    }
    handleClickClose(event) {
        console.log(event.target);
        if (event.target.classList.contains("completedButton")) return;
        this.setState({
            showFireworks: false
        })
    }

    render() {
        const { showFireworks } = this.state;
        const styles = {
            display: showFireworks ? "initial" : "none"
        }
        return (
            <div className="oneChoreWrapper assignChoresWrapper" style={this.state} onClick={this.handleClickClose}>
                <h2>{this.props.title}</h2>
                <p className="choreDescription">{this.props.description}</p>
                <div className="fireworks" style={styles} ></div>
                <button className="assignChoreButton" onClick={() => { this.props.assignChore(this.props._id, this.props.ageLevel) }}>Assign Chore</button>
                <div className="nameAndPic">
                    {this.props.assignedTo && <p className="assignedPerson">{this.props.assignedTo.name}: </p>}
                    {this.props.assignedTo &&<div className="crop assignedPic">
                         <img src={this.props.assignedTo.image} alt="" />
                    </div>}
                </div>
                <button className="completedButton" onClick={this.handleClick}></button>
            </div>
        )
    }
}



export default OneChoreList;