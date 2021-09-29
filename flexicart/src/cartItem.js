import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>Phone</div>
          <div style={{ color: "#777" }}>Rs 999</div>
          <div style={{ color: "#777" }}>Qty:2</div>
          <div>
            <div className="cart-item-actions">{/* Buttons */}</div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};
export default CartItem;
