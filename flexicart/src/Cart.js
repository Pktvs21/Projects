import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 5,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div>
        <div className="cart">
          {products.map((product) => {
            return <CartItem product={product} key={product.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Cart;
