import React, { Component } from 'react'
import CartItem from './CartItem'


class Cart extends Component {
    render() {
        return (
            <div >
                <div className="cart">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>
        )
    }
}

export default Cart
