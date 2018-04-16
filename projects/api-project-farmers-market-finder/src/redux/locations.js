import axios from "axios";

const initialState = {
    data: [""],
    info: {
        Products: ""
    },
    zip: "",
    id: "",
    marketName: "",
    savedMarkets: [],
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
        case "SAVE_INFO":
            return {
                ...state,
                savedMarkets: [...state.savedMarkets, {
                        name: action.stateObj.marketName,
                        info: action.stateObj.info,
                    }
                ],
                loading: false,
            }
        case "MARKET_NAME":
            let newMarketName = ""
            function getMarketName(arr) {
                for (let i = 0; i < state.data.length; i++) {
                    if (arr[i].id === action.id) {
                        newMarketName = arr[i].marketname
                    } else {
                    }
                }
            }
            getMarketName(state.data);
            return {
                ...state,
                marketName: newMarketName,
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
    // console.log(id);
    return {
        type: "CURRENT_ID",
        id,
    }
}

export const getMarketInfo = id => {
    // console.log(id);
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
export const saveInfo = stateObj => {
    // console.log(stateObj);
    return {
        type: "SAVE_INFO",
        stateObj
    }
}
export const saveName = id => {
    // console.log(id);
    return {
        type: "MARKET_NAME",
        id
    }
}

export default locationReducer;