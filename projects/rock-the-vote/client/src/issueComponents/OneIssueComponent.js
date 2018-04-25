import React from 'react';
import CommentForm from "./CommentForm";

function OneIssueComponent(props) {
    return (
        <li className="issueLiItem">
            {/* <div > */}
                <h2 className="issueTitle">{props.title}</h2>
                <button className="issueDelete" onClick={() => props.deleteIssue(props._id)} >Delete Issue</button>
                <p className="issueDescription"> {props.description}</p>
                <p className="votes">Votes: {props.totalVotes}</p>
                <h3 className="voteText">Vote:</h3>
                <button className="upVote" onClick={() => props.changeVotes(props._id, props.totalVotes + 1)}>&#x2191;</button>
                <button className="downVote" onClick={() => props.changeVotes(props._id, props.totalVotes - 1)}>&#x2193;</button>
                <div className="commentForm">
                    <CommentForm issueId={props._id} />
                {/* </div> */}
            </div>
        </li>
    )
}

export default OneIssueComponent;