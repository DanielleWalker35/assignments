const initialState ={
    data:[]
}

const badgeReducer = (state=initialState, action)=> {
    switch (action.type) {
        case "ADD_BADGE":
        return {
            data: [...state.data, action.badge],
        }
        default:
        return state;
    }
}
export const addBadge = badge => {
    return {
        type: "ADD_BADGE",
        badge
    }
}


export default badgeReducer;