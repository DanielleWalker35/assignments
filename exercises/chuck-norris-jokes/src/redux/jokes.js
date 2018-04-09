import axios from "axios";
const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_JOKES":
        return {
            ...state,
            data: [action.jokes],
            loading: false,
        }
        case "ERR_MSG":
        return {
            ...state,
            loading: false,
            errMsg: action.errMsg,
        }
        default:
            return state;
    }
}
const chuckapiURL = "http://api.icndb.com/jokes/random?exclude=[explicit]";

export const getJokes = () => {
    return dispatch => {
        axios.get(chuckapiURL)
            .then(response => {
                dispatch({
                    type: "GET_JOKES",
                    jokes: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, your data is unavailable"
                })
            })
    }
}
export default jokeReducer;