import UserActionsTypes from "./actions-types"

export const LoginUser = (payload) => ({
    type: UserActionsTypes.Login,
    payload,
});

export const LogoutUser = () => ({
    type: UserActionsTypes.Logout,
});

