import { setAllProducts } from './cartSlice'
import { collection, addDoc } from "firebase/firestore"
import { FirebaseDB } from '../../firebase/config'




export const startProducts = (products) => {

    return async (dispatch) => {

        dispatch(setAllProducts(products))

    }
}

export const checkOut = () => {

    return async (_dispatch, getState) => {


        const { productsCart, qtyProducts, totalPrice } = getState().cart

        const cartToCheck = {
            products: [...productsCart],
            total: Number(totalPrice),
            totalProducts: qtyProducts
        }

        await addDoc(collection(FirebaseDB, "checkOut"), cartToCheck)

    }
}