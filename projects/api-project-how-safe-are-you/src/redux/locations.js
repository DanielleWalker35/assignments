import axios from "axios";

const initialState = {
    data: [],
    // year: "1993",
    // state: "UT",
    zip: "",
    loading: true,
    errMsg: "",
}
this.state = this.initialState;

// console.log(initialState);
// const fbiapiStateURL = "https://api.usa.gov/crime/fbi/ucr/offenses/count/states/UT/location_name?page=1&per_page=10&output=json&api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "GET_LOCATION_NAT":
        //     return {
        //         ...state,
        //         data: action.locations,
        //         loading: false,
        //     }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg,
            }
        case "ENTER_ZIP":
            return {
                ...state,
                loading: false,
                zip: action.zip,
            }
        // case "SELECT_STATE":
        //     return {
        //         ...state,
        //         loading: false,
        //         state: action.state,
        //     }
        case "GET_MARKET_LOCATIONS":
            return {
                ...state,
                data: action.locations,
                loading: false,
            }
        default:
            return state;
    }
}
export const addZip = zip => {
    return {
        type: "ENTER_ZIP",
        zip
    }
}

export const enteredZip = zip => {
    // event.preventDefault();
    console.log(zip);
    return dispatch => {
        axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip)
            .then(response => {
                dispatch({
                    type: "GET_MARKET_LOCATIONS",
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

// const fbiapiURL = "https://api.usa.gov/crime/fbi/ucr/offenses/count/national/location_name?page=1&per_page=10&output=json&api_key=6y5aUhuYQiZoZ2AXs7w6oBv3uMA2tYFrdUgSvR6i";

// export const getLocationNat = () => {
//     return dispatch => {
//         axios.get(fbiapiURL)
//             .then(response => {
//                 dispatch({
//                     type: "GET_LOCATION_NAT",
//                     locations: response.data.results
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: "ERR_MSG",
//                     errMsg: "Sorry your data is unavailable."
//                 })
//             })
//     }
// }
// console.log(state.state);

const fmapiURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=20120";

export const getMarketLocations = () => {
    return dispatch => {
        axios.get(fmapiURL)
            .then(response => {
                dispatch({
                    type: "GET_MARKET_LOCATIONS",
                    locations: response.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry no data is unavailable."
                })
            })
    }
}

export default locationReducer;