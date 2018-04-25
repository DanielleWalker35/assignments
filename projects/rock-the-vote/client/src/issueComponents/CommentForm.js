import React, { Component } from 'react';
import axios from 'axios';
import Comment from "./Comment";
// import { connect } from "react-redux";
// import {addComment} from "../redux/reduxIssues";

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: "",
                comment: "",
                issueId: this.props.issueId
            },
            issueId: this.props.issueId,
            comments: []
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    componentDidMount() {
        // console.log(this.state.issueId);
        axios.get("/comments?issueId=" + this.state.issueId)
            .then(response => {
                this.setState({
                    comments: response.data
                })
            })
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

    handleClick(event) {
        event.preventDefault();
        // console.log(this.state.inputs);
        axios.post("/comments", this.state.inputs)
            .then(response => {
                this.setState(prevState => {
                    // console.log(prevState);
                    return {
                        comments: [...prevState.comments, response.data]
                    }
                })
            })
            .catch(err => {
                console.error(err);
            })
        this.setState({
            inputs: {
                name: "",
                comment: "",
                issueId: this.props.issueId
            },
        })
    }
    handleDelete(id) {
        console.log(id);
        axios.delete("/comments/" + id)
            .then(response => {
                this.setState({
                    comments: this.state.comments.filter(comment => comment._id !== id)
                })
            })
    }
    handleEdit(inputs, id) {
        console.log(inputs);
        console.log(id);
        axios.put("/comments/" + id, inputs)
            .then(response => {
                this.setState({
                    comments: this.state.comments.map(comment => {
                        if (comment._id === id) {
                            return response.data
                        } else {
                            return comment;
                        }
                    }),
                })
            })
    }

    render() {
        const { name, comment } = this.state.inputs;
        const { comments } = this.state
        const commentList = comments.map(comment => <Comment key={comment._id} id={comment._id} deleteComment={this.handleDelete} editComment={this.handleEdit}{...comment} />)
        return (
            <div>
                <p className="commentText">Comment:</p>
                <form className="commentInputForm">
                    <input className="nameInput" onChange={this.handleChange} name="name" value={name} type="text" placeholder="Name" />
                    <input className="commentInput" onChange={this.handleChange} name="comment" value={comment} type="text" placeholder="Comment" />
                    <button className="commentSubmit" onClick={this.handleClick}>Submit</button>
                </form>
                <ul>
                    {commentList}
                </ul>
            </div>
        )
    }
}
export default CommentForm;