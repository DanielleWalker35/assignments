import axios from "axios";

const initialState = {
    data: [],
    info: [],
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

        case "GET_MARKET_LOCATIONS":
            return {
                ...state,
                data: action.locations,
                loading: false,
            }
        case "GET_MARKET_INFO":
            return {
                ...state,
                info: action.info,
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
    // console.log(zip);
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

// const fminfoapiURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=1012592";
export const getMarketInfo = id => {
    console.log(id);
    return dispatch => {
        axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id="+ id)
            .then(response => {
                dispatch({
                    type: "GET_MARKET_INFO",
                    info: response.data.marketdetails
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