import axios from "axios";

const initialState = {
    data: [""],
    info: {
        Products: ""
    },
    zip: "",
    id: "",
    loading: false,
    errMsg: "",
}
this.state = this.initialState;

const locationReducer = (state = initialState, action) => {
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
        case "ADD_ZIP":
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
        case "CURRENT_ID":
            return {
                ...state,
                id: action.id,
                loading: false,
            }
        default:
            return state;
    }
}
export const addZip = zip => {
    return {
        type: "ADD_ZIP",
        zip
    }
}

export const enteredZip = zip => {
    return dispatch => {
        dispatch({
            type: "LOADING",
        });
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

export const setCurrentId = id => {
    return {
        type: "CURRENT_ID",
        id,
    }
}

export const getMarketInfo = id => {
    console.log(id);
    return dispatch => {
        axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id)
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