import { actionType } from "../action/type";

const initialState = {
    courseList: [],
    courseDetail: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_COURSE:
            state.courseList = [...action.payload]
            return {...state};
        case actionType.SET_DETAIL:
            state.courseDetail = {...action.payload}
            return {...state};
        default:
            return state;
    }
};

export default reducer;