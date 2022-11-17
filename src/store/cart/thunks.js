import { setAllProducts } from './cartSlice'

export const startProducts = (products) => {

    return async (dispatch) => {

        dispatch(setAllProducts(products))

    }
}
