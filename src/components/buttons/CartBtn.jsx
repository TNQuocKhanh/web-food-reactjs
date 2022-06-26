import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

export class CartBtn extends Component {
  render() {
    return (
      <>
        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
          <span className="fa fa-shopping-cart me-1"></span> Giỏ hàng (
          {this.props.numberCart})
        </NavLink>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};
export default connect(mapStateToProps, null)(CartBtn);
