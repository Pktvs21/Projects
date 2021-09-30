import React, { Component } from "react";

class CartItem extends Component {
  render() {
      console.log(this.props);
    const { title, price, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>{price}</div>
          <div style={{ color: "#777" }}>Qty:{qty}</div>
          <div>
            <div className="cart-item-actions">
              <img
                alt="increase"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
                onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
              />
              <img
                alt="decrease"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
              />
              <img
                alt="delete"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/1345/1345823.png"
                onClick={()=>this.props.onDeleteQuantity(this.props.product)}
              />
            </div>
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
