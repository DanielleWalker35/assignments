import axios from "axios";

const initialIssueState = {
    data: [],
    loading: true,
    errMsg: ""
}

this.state = this.initialIssueState;

const issueReducer = (state = initialIssueState, action) => {
    switch (action.type) {
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        case "GET_ISSUES":
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case "ADD_VOTE":
            return {
                ...state,
                loading: false,
                data: state.data.map(issue => {
                    if (issue._id === action.id) {
                        return {
                            ...issue,
                            totalVotes: action.votes
                        }
                    } else {
                        return issue;
                    }
                })
            }
        case "ADD_ISSUE":
            return {
                ...state,
                data: [...state.data, action.newIssue],
                loading: false
            }
        case "DELETE_ISSUE":
            return {
                ...state,
                data: state.data.filter(issue => issue._id !== action.id),
                loading: false
            }
        default:
            return state;
    }
}

export const getIssues = () => {
    return dispatch => {
        axios.get("/issues")
            .then(response => {
                dispatch({
                    type: "GET_ISSUES",
                    data: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry no data is available"
                })
            })
    }
}
export const changeVotes = (id, votes) => {
    // console.log(votes)
    return dispatch => {
        axios.put("/issues/" + id, votes)
            .then(response => {
                dispatch({
                    type: "ADD_VOTE",
                    newIssue: response.data,
                    id,
                    votes
                })
            })
    }
}
export const addIssue = (newIssue) => {
    console.log(newIssue);
    return dispatch => {
        axios.post("/issues", newIssue)
            .then(response => {
                dispatch({
                    type: "ADD_ISSUE",
                    newIssue: response.data
                })
            })
    }

}
export const deleteIssue = (id) => {
    console.log(id);
    return dispatch => {
        axios.delete("/issues/" + id)
            .then(response => {
                dispatch({
                    type: "DELETE_ISSUE",
                    id
                })
            })
        // axios.delete("/comments?issueId=" + id)
        //     .then(response => {
        //         console.log("i've been deleted");
        //     })
    }
}
export default issueReducer;