import axios from "axios";

const initialState = {
    data: [],
    year: "1993",
    // state: "UT",
    loading: true,
    errMsg: "",
}
this.state = this.initialState;

console.log(initialState);
const fbiapiStateURL = "https://api.usa.gov/crime/fbi/ucr/offenses/count/states/UT/location_name?page=1&per_page=10&output=json&api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

const nationalLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LOCATION_NAT":
            return {
                ...state,
                data: action.locations,
                loading: false,
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg,
            }
        case "SELECT_YEAR":
            return {
                ...state,
                loading: false,
                year: action.year,
            }
        // case "SELECT_STATE":
        //     return {
        //         ...state,
        //         loading: false,
        //         state: action.state,
        //     }
        case "GET_STATE_LOCATIONS":
            return {
                ...state,
                data: action.locations,
                loading: false,
            }
        default:
            return state;
    }
}
export const selectYear = event => {
    return {
        type: "SELECT_YEAR",
        year: event.target.value
    }
}
export const selectState = event => {
    return dispatch => {
        axios.get("https://api.usa.gov/crime/fbi/ucr/offenses/count/states/" + event.target.value + "/location_name?page=1&per_page=10&output=json&api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv")
            .then(response => {
                dispatch({
                    type: "GET_STATE_LOCATIONS",
                    locations: response.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry your data is unavailable."
                })
            })
    }
}

const fbiapiURL = "https://api.usa.gov/crime/fbi/ucr/offenses/count/national/location_name?page=1&per_page=10&output=json&api_key=6y5aUhuYQiZoZ2AXs7w6oBv3uMA2tYFrdUgSvR6i";

export const getLocationNat = () => {
    return dispatch => {
        axios.get(fbiapiURL)
            .then(response => {
                dispatch({
                    type: "GET_LOCATION_NAT",
                    locations: response.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry your data is unavailable."
                })
            })
    }
}
// console.log(state.state);

export const getStateLocation = () => {
    return dispatch => {
        axios.get(fbiapiStateURL)
            .then(response => {
                dispatch({
                    type: "GET_STATE_LOCATIONS",
                    locations: response.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry your data is unavailable."
                })
            })
    }
}

export default nationalLocationReducer;