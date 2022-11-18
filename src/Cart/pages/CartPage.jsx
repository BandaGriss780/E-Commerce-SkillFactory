import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, deleteProduct } from "../../store/cart/cartSlice";
import { checkOut } from '../../store/cart/thunks'
import '../../index.css'

export const CartPage = () => {

    const dispatch = useDispatch()

    const { productsCart, qtyProducts, totalPrice } = useSelector(state => state.cart)


    const onCheckOut = () => {

        dispatch(checkOut())
    }


    return (
        <>
            <div className="container">
                <h1 className="main-heading">Shopping Cart</h1>
                <div className="cart-container" >
                    {productsCart.length ? (
                        productsCart.map((product) => (
                            <div className="each-product" key={product.id}  >
                                <div className="img-cont">
                                    <img
                                        src={product.img}
                                        alt="not-found"
                                        className="responsive-img"
                                    />
                                </div>
                                <h3 className="prod-name" style={{ textAlign: "center", fontSize: "2rem" }}>{product.name}</h3>
                                <p className="prod-price" style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: "500" }}>${product.price}.00</p>
                                <div className="prod-cta" >
                                   
                                    <button
                                        className="fas fa-plus"
                                        onClick={() => dispatch(increment(product.id))}
                                     
                                    >+</button>
                                    <span className="cart-quantity" >{product.qtyCart}</span>
                                    <button
                                        className="fas fa-minus"
                                        onClick={() => dispatch(decrement(product.id))}
                                       


                                    >-</button>
                                </div>
                                <div className="total-prod-price">
                                    ${product.price * Number(product.qtyCart)}
                                </div>
                                <div className="total-prod-price">
                                    <button
                                        className="fas fa-trash-alt"
                                        onClick={() => dispatch(deleteProduct(product.id))}
                                       
                                    >Eliminar Producto</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <span>Not products added</span>
                    )}
                </div>
                {productsCart.length > 0 ? (
                    <div className="cart-summry">
                        <div className="summary">
                            <h3>Cart products</h3>
                            <div className="pay-total-items">
                                <div className="items">Total Items</div>
                                <div className="items-count">
                                    {qtyProducts}
                                </div>
                            </div>
                            <div className="total-price-section">
                                <div className="title">Total Price</div>
                                <div className="items-price">$
                                    {totalPrice}
                                    .00</div>
                                  
                            </div>
                            <button className="checkout"
                                onClick={onCheckOut}
                            >
                                Checkout
                            </button>
                          
                            <div className="stripe-section">
                                {/* <stripe-checkout>
                                stripeKey="pk_test_51I2rmvG1SGhtxvtXhcM6ojfL5EknI0UiE5jqQedC0gFL6vAImspnRjomUXpZPgZuDRngSKBMSBG4GpibRC4crPZa00O1pb58yO"
                                // token={handleToken}
                                billingAddress
                                shippingAddress
                                // amount={totalPrice * 100}
                                name="All Products"
                            </stripe-checkout> */}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>

        </>
    );
};

