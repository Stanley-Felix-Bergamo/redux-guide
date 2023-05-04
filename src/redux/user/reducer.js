import UserActionsTypes from "./actions-types";

const initialState = {
    currentUser: null,
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case UserActionsTypes.Login:
            return { ...state, currentUser: action.payload };
        case UserActionsTypes.Logout:
            return { ...state, currentUser: null };
        default:
            return state;
    }
};

export default userReducer;