const initialState = {
    isRevealed: false,
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "SET_REVEAL":
            state.isRevealed = payload;
            return {...state};
        default: 
            return state;
    }
};

export default reducer;