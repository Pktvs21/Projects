import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Watch",
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
          title: "Laptop",
          qty: 1,
          img: "",
          id: 5,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    // console.log("Increase Quantity", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    // console.log("Increase Quantity", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products,
    });
  };
  handleDeleteQuantity =(product) =>{
    
  }
  render() {
    const { products } = this.state;
    return (
      <div>
        <div className="cart">
          {products.map((product) => {
            return (
              <CartItem
                product={product}
                key={product.id}
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteQuantity={this.handleDeleteQuantity}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cart;
