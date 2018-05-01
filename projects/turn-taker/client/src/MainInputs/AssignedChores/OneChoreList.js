import React, { Component } from 'react';

class OneChoreList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "white",
        };
    }
    changeColor(backgroundColor) {
        this.setState({
          backgroundColor
        });
      }
    render() {
        return (
            <div style= {this.state}>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                {this.props.assignedTo && <p>{this.props.assignedTo.name}</p>}
                <button onClick={() => { this.props.assignChore(this.props._id, this.props.ageLevel), this.changeColor("white") }}>Assign Chore</button>
                <button onClick={() => this.changeColor("green")}>Completed</button>
            </div>
        )
    }
}



export default OneChoreList;