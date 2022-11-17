import { createSlice } from "@reduxjs/toolkit";
import { startAfter } from "firebase/firestore/lite";


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
            if (state.productsCart.includes(payload)) {
                state.productsCart = state.productsCart
                state.totalPrice += payload.price
                return
            }
            state.qtyProducts++
            state.productsCart.push(payload)
            state.totalPrice += payload.price
            return
        },
        increment: (state, { payload }) => {
            const index = state.productsCart.findIndex((prod) => prod.id === payload)

            let product = {
                ...state.productsCart.find((product) => product.id === payload),
            }

            product.qtyCart += 1

            state.productsCart[index] = product
            state.totalPrice += product.price;
            state.qtyProducts += 1
            return
        },
        decrement: (state, { payload }) => {
            let product = state.productsCart.find((product) => product.id === payload);
            if (product.qtyCart <= 0) {
                return
            } else {
                product.qtyCart -= 1
                state.totalPrice -= product.price;
                state.qtyProducts -= 1
            }
            return
        }
    }
})


export const {
    setAllProducts,
    addProductCart,
    increment,
    decrement
} = cartSlice.actions;

export default cartSlice.reducer
