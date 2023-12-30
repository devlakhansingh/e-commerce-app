import React from 'react'
import Cartll from './Cartll'
import { useSelector } from 'react-redux'



const CartContainer = () => {




    const { cart } = useSelector(state => state.cart)

    const total = cart.reduce((p, c) => {
        return p + c.price
    }, 0)


    return (
        <>
            <div data-aos="zoom-in-down" className="wrapper">
                <div className="wrapper">
                    <h1>Shopping Cart</h1>
                    {
                        cart.map(cartitem => <Cartll key={cartitem.id} cartitem={cartitem} />)
                    }
                </div>

            </div>

            <div className="right-bar">

                <p><span>Total</span> <span>{total}</span></p><a href="#"><i className="fa fa-shopping-cart"></i>Checkout</a>
            </div>

        </>
    )
}

export default CartContainer
