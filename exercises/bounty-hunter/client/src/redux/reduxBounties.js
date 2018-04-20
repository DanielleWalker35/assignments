import axios from 'axios';

const initialState = {
    data: [],
    loading: true,
    errMst: "",
}

this.state = this.initialState;

const bountyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg,
            }
        case "LOADING":
            return {
                ...state,
                loading: true,
            }
        case "GET_BOUNTIES":
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case "ADD_BOUNTY":
            return {
                ...state,
                data: [...state.data, action.newBounty],
                loading: false,
            }
        case "DELETE_BOUNTY":
            return {
                ...state,
                data: state.data.filter(bounty => bounty._id !== action.id),
                loading: false,
            }
        case "EDITED_BOUNTY":
            return {
                ...state,
                data: state.data.map(bounty => {
                    if (bounty._id === action.id) {
                        return action.newBounty
                    } else {
                        return bounty;
                    }
                }),
                loading: false,
            }

        default:
            return state;
    }
}
export const addBounty = (newBounty) => {
    console.log(newBounty);
    return dispatch => {
        axios.post("/bounties/", newBounty)
            .then(response => {
                dispatch({
                    type: "ADD_BOUNTY",
                    newBounty: response.data
                })
            })
    }
}
export const deleteBounty = (id) => {
    return dispatch => {
        axios.delete("/bounties/" + id)
            .then(response => {
                dispatch({
                    type: "DELETE_BOUNTY",
                    id
                })
            })
            
    }
}

export const editedBounty = (id, newBounty) => {
    console.log(newBounty);
    console.log(id);
    return dispatch => {
        axios.put("/bounties/" + id, newBounty)
            .then(response => {
                dispatch({
                    type: "EDITED_BOUNTY",
                    newBounty: response.data,
                    id
                })
            })
    }
}

export const getBounties = () => {
    return dispatch => {
        axios.get("/bounties")
            .then(response => {
                dispatch({
                    type: "GET_BOUNTIES",
                    data: response.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry no data is available",
                })
            })
    }
}
export default bountyReducer;