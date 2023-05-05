import CartActionTypes from "./action-types";

const initialState = {
    products: [],
};


const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case CartActionTypes.Add_Product:
            //Verifica se o produto já está no carrinho
            const productIsAlreadyCart = state.products.some(
                (product) => product.id === action.payload.id
            );

            //Se ele estiver, aumente sua quantidade em + 1
            if (productIsAlreadyCart) {
                return {
                    ...state,
                    products: state.products.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                    ),
                }
            }

            //se ele não estiver,adicione-o
            return {
                ...state,
                products: [...state.products, { ...action.payload, quantity: 1 }],
            }

        case CartActionTypes.Remove_Product:
            return {
                ...state,
                products: state.products.filter(
                    product => product.id = !action.payload
                ),
            };

        case CartActionTypes.Increase_Product_Quantity:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                ),
            };

        case CartActionTypes.Decrease_Product_Quantity:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                ).filter((product) => product.quantity > 0)
            };




        default:
            return state;
    }

};



export default cartReducer;