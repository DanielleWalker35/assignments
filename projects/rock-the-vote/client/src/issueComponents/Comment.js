import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: props.name || "",
                comment: props.comment || "",
                issueId: this.props.issueId
            },
        }
        this.state=this.initialState;
        this.handleChange= this.handleChange.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value,
                    // issueId: id
                },
            }
        })

    }
    render(props) {
        const { name, comment } = this.state.inputs;
        return (
            <li>
                <p>{this.props.name}:</p>
                <p>{this.props.comment}</p>
                <button onClick={() => {this.props.deleteComment(this.props.id)}}>Delete</button>
                <p>Edit Your Comment:</p>
                <form onSubmit={(event) => {event.preventDefault(); this.props.editComment(this.state.inputs, this.props.id)}} >
                    <input onChange={this.handleChange} name="name" value={name} type="text" placeholder="Name" />
                    <input onChange={this.handleChange} name="comment" value={comment} type="text" placeholder="Comment" />
                    <button>Submit</button>
                </form>
            </li>
        )
    }
}
export default Comment;