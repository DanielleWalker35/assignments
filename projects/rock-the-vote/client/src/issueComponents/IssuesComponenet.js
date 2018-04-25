import React, { Component } from 'react';
import { connect } from "react-redux";
import { getIssues, changeVotes, deleteIssue } from "../redux/reduxIssues";
import OneIssueComponent from "./OneIssueComponent";
import NewIssue from "./NewIssue";


class IssuesComponent extends Component {

    componentDidMount() {
        this.props.getIssues();
    }

    render(props) {
        console.log(this.props.data);
        const { data } = this.props;
        const issuesList = data.sort((a, b) => b.totalVotes - a.totalVotes).map(issue => <OneIssueComponent key={issue._id} changeVotes={this.props.changeVotes} deleteIssue={this.props.deleteIssue} {...issue} />);
        return (
            <div className="issuesWrapper">
                <header>Hot Topics</header>
                <ol className="issueOrderedList">
                    {issuesList}
                </ol>

                <NewIssue />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state.issues;
}
export default connect(mapStateToProps, { getIssues, changeVotes, deleteIssue })(IssuesComponent);

