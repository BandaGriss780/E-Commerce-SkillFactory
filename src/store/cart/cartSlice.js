import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    productsCart: [],
    qtyProducts: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setAllProducts: (state, { payload }) => {
            state.products = payload
        },
        addProductCart: (state, { payload }) => {

            if (state.productsCart.includes(state.productsCart.find((product) => product.id == payload))) {
                state.productsCart = state.productsCart

            } else if (!state.productsCart.includes(state.productsCart.find((product) => product.id == payload))) {

                state.qtyProducts++
                state.productsCart.push(state.products.find((product) => product.id == payload))
                state.totalPrice += state.productsCart.find((product) => product.id == payload).price
            }
        },
        increment: (state, { payload }) => {
            const index = state.productsCart.findIndex((prod) => prod.id === payload)

            let product = {
                ...state.productsCart.find((product) => product.id === payload),
            }

            product.qtyCart += 1

            state.productsCart[index] = product
            state.totalPrice += state.productsCart.find((product) => product.id == payload).price
            state.qtyProducts += 1
            return
        },
        decrement: (state, { payload }) => {
            let product = state.productsCart.find((product) => product.id === payload);
            if (product.qtyCart <= 1) {
                return

            } else {
                product.qtyCart -= 1
                state.totalPrice -= state.productsCart.find((product) => product.id == payload).price
                state.qtyProducts -= 1
            }
            return
        },
        deleteProduct: (state, { payload }) => {
            state.qtyProducts -= state.productsCart.find(product => product.id == payload).qtyCart
            state.totalPrice -= state.productsCart.find(product => product.id == payload).qtyCart * state.productsCart.find(product => product.id == payload).price
            state.productsCart = state.productsCart.filter((e) => e.id !== payload)
        }
    }
})


export const {
    setAllProducts,
    addProductCart,
    increment,
    decrement,
    deleteProduct
} = cartSlice.actions;

export default cartSlice.reducer