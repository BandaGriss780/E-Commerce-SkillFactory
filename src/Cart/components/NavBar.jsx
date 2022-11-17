import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startLogout } from '../../store/auth/thunks'
// import { cartContext } from "../../GlobalState/CartContext";

export const NavBar = () => {

    const { qtyProducts } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const onLogout = () => {

        dispatch(startLogout())

    }


    return (
        <nav className="navbar__container shadow">
            <div className="navbar__logo" style={{display:"flex", flexDirection:"column", gap:".5rem"}}>
                <Link className="" to="/">
                    La Tienda De Bandaco.
                </Link>
                <span>Llegaste al byte correcto, disfruta de nuestros productos!</span>
            </div>
            <div className="navbar__item">
                <div className="navbar__item__list">
                    <ul className="navbar__item__list__products">
                        <li className="navbar__item__list__li">
                            <Link className="" to="/products">
                                All Products
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar__item__list__login">
                        <li className="navbar__item__list__li">
                            <Link onClick={onLogout}>
                                Logout
                            </Link>
                        </li>
                        <li className="navbar__item__list__cart">
                            <Link className="" to="/cart">
                                <span className="shopping-cart">
                                    <i class="bi bi-cart-plus-fill"></i>
                                    <span className="cart-count"> {qtyProducts} </span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

