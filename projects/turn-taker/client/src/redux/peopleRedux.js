import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

this.state = this.initialState;

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PEOPLE":
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case "ADD_PERSON":
            return {
                ...state,
                loading: false,
                data: [...state.data, action.newPerson]
            }
        case "EDIT_PERSON":
            return {
                ...state,
                loading: false,
                data: state.data.map(person => {
                    if (person._id === action.id) {
                        return action.editedPerson
                    } else {
                        return person
                    }
                })
            }
        case "DELETE_PERSON":
            return {
                ...state,
                loading: false,
                data: state.data.filter(person => person._id !== action.id)
            }
        default:
            return state;
    }
}
export const getPeople = () => {
    return dispatch => {
        axios.get("/people")
            .then(response => {
                dispatch({
                    type: "GET_PEOPLE",
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
export const addPerson = (newPerson) => {
    console.log(newPerson);
    return dispatch => {
        axios.post("/people", newPerson)
            .then(response => {
                dispatch({
                    type: "ADD_PERSON",
                    newPerson: response.data
                })
            })
    }
}
export const editPerson = (editedPerson, id) => {
    return dispatch => {
        axios.put("/people/" + id, editedPerson)
            .then(response => {
                dispatch({
                    type: "EDIT_PERSON",
                    editedPerson: response.data,
                    id
                })
            })
    }
}
export const deletePerson = (id) => {
    console.log(id);
    return dispatch => {
        axios.delete("/people/" + id)
            .then(response => {
                dispatch({
                    type: "DELETE_PERSON",
                    id
                })
            })
    }
}
export default peopleReducer;