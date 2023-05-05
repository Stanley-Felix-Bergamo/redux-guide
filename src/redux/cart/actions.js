import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CartActionTypes.Add_Product,
    payload,
});

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.Remove_Product,
    payload,
});

export const increaseProductQuantity = (payload) => ({
    type: CartActionTypes.Increase_Product_Quantity,
    payload,
});

export const decreaseProductQuantity = (payload) => ({
    type: CartActionTypes.Decrease_Product_Quantity,
    payload,
});