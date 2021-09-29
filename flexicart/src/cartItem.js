import React, { Component } from "react";

class CartItem extends Component {
  increaseQuantity = () => {
    // console.log(this.state);
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    },()=>{
        console.log(this.state)
    });
  };
  decreaseQuantity = () => {
    // console.log(this.state);
    const {qty} =this.state;
    if(qty ===0){
        return
    }
    this.setState((prevState) => {
        return {
          qty: prevState.qty - 1,
        };
      },()=>{
        console.log(this.state)
    })
  };
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
                onClick={this.increaseQuantity}
              />
              <img
                alt="decrease"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                onClick={this.decreaseQuantity}
              />
              <img
                alt="delete"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/1345/1345823.png"
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
