import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../store/cart/cartSlice";
// import { cartContext } from "../GlobalState/CartContext";
// import { decrement, deleteProduct, increment } from "../actions";

export const CartPage = () => {


    // const { shoppingCart, dispatch, qty, totalPrice } = useContext(cartContext)

    // const handleToken = (token) => {
    //     console.log("Hi");
    // }
  const dispatch = useDispatch()

    const { productsCart, qtyProducts, totalPrice } = useSelector(state => state.cart)

    return (
        <>

            {/* 
            <div class="card" >
                <img src="" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}


            <div className="container">
                <h1 className="main-heading">Shopping Cart</h1>
                <div className="cart-container" style={{display:"flex", gap:"2.5vh", flexWrap: "wrap"}}>
                    {productsCart.length ? (
                        productsCart.map((product) => (
                            <div className="each-product" key={product.id} style={{border: "2px solid black", borderRadius: "1rem", padding:"1rem", maxWidth:"22rem", display:"flex", gap: "1rem", flexDirection:"column", margin:"5vh"}} >
                                <div className="img-cont">
                                    <img
                                        src={product.img}
                                        alt="not-found"
                                        className="responsive-img"
                                        style={{width:"20rem",height:"10rem",objectFit:"cover"}}
                                    />
                                </div>
                                <h3 className="prod-name" style={{textAlign: "center", fontSize: "2rem"}}>{product.name}</h3>
                                <p className="prod-price" style={{textAlign:"center", fontSize: "1.75rem", fontWeight:"500"}}>${product.price}.00</p>
                                <div className="prod-cta" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <button
                                        className="fas fa-plus"
                                     onClick={() => dispatch(increment(product.id))}
                                        style={{fontSize:"1.5rem", paddingInline:".5rem", border:"1px solid black", borderRadius:".25rem", marginInline:"1rem"}}
                                    >+</button>
                                    <span className="cart-quantity" style={{display:"inline-block", textAlign:"center", fontSize:"2rem", fontWeight:"500"}}>{product.qtyCart}</span>
                                    <button
                                        className="fas fa-minus"
                                    onClick={() => dispatch(decrement(product.id))}
                                    style={{fontSize:"1.5rem", paddingInline:".25rem", border:"1px solid black", borderRadius:".25rem", marginInline:"1rem"}}
                                    

                                    >-</button>
                                </div>
                                <div className="total-prod-price">
                                    {/* ${product.price * product.qty} */}
                                </div>
                                <div className="total-prod-price">
                                    <i
                                        className="fas fa-trash-alt"
                                    // onClick={() => dispatch(deleteProduct(product.id))}
                                    ></i>
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

