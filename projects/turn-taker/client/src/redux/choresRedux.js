import axios from 'axios';

const initialState = {
    choreData: [],
    loading: true,
    errMsg: ""
}

this.state = this.initialState;
const choresReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CHORES":
            return {
                ...state,
                loading: false,
                choreData: action.data
            }
        case "ADD_CHORE":
            return {
                ...state,
                loading: false,
                choreData: [...state.choreData, action.newChore]
            }
        case "EDIT_CHORE":
            return {
                ...state,
                loading: false,
                choreData: state.choreData.map(chore => {
                    if (chore._id === action.id) {
                        return action.editedChore
                    } else {
                        return chore
                    }
                })
            }
        case "DELETE_CHORE":
            return {
                ...state,
                loading: false,
                choreData: state.choreData.filter(chore => chore._id !== action.id)
            }
        default:
            return state;
    }
}
export const getChores = () => {
    return dispatch => {
        axios.get("/chores")
            .then(response => {
                dispatch({
                    type: "GET_CHORES",
                    data: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry no data available"

                })
            })
    }
}
export const addChore = (newChore) => {
    console.log(newChore);
    return dispatch => {
        axios.post("/chores", newChore)
            .then(response => {
                dispatch({
                    type: "ADD_CHORE",
                    newChore: response.data
                })
            })
    }
}
export const editChore = (editedChore, id) => {
    return dispatch => {
        axios.put("/chores/" + id, editedChore)
            .then(response => {
                dispatch({
                    type: "EDIT_CHORE",
                    editedChore: response.data,
                    id
                })
            })
    }
}
export const deleteChore = (id) => {
    console.log(id);
    return dispatch => {
        axios.delete("/chores/" + id)
            .then(response => {
                dispatch({
                    type: "DELETE_CHORE",
                    id
                })
            })
    }
}
export default choresReducer;