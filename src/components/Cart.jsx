import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import emptycart from "../assets/empty-cart.png";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../redux/actions";

function Cart({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
  console.log(items);
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }
  if (ListCart.length > 0) {
    return (
      <div className="row mt-5 mx-5">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ListCart.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={item.image}
                        alt="img"
                        style={{ width: "100px", height: "80px" }}
                      />
                    </td>
                    <td>{item.price} đ</td>
                    <td>
                      <span
                        className="btn btn-primary"
                        style={{ margin: "2px" }}
                        onClick={() => DecreaseQuantity(key)}
                      >
                        -
                      </span>
                      <span className="btn btn-info">{item.quantity}</span>
                      <span
                        className="btn btn-primary"
                        style={{ margin: "2px" }}
                        onClick={() => IncreaseQuantity(key)}
                      >
                        +
                      </span>
                    </td>
                    <td>{TotalPrice(item.price, item.quantity)} đ</td>
                    <td>
                      <i
                        className="fa fa-trash badge-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => DeleteCart(key)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
              <tr className="my-3">
                <td colSpan="5">Tổng cộng</td>
                <td>{Number(TotalCart).toLocaleString("en-US")} đ</td>
              </tr>
            </tbody>
          </table>
          <div className="container py-5">
            <div className="row">
              <NavLink
                to="/products"
                className="btn btn-outline-dark mb-5 w-25 mx-auto"
              >
                <i className="fa fa-arrow-left mx-2"></i>Tiếp tục mua hàng
              </NavLink>
              <NavLink
                to="/checkout"
                className="btn btn-outline-dark mb-5 w-25 mx-auto"
              >
                Tiến hành đặt hàng
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-2">
          <div className="row">
            <h3 className="text-center my-2">Giỏ hàng của bạn trống</h3>
            <NavLink
              to="/products"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              <i className="fa fa-arrow-left mr-2"></i> Tiếp tục mua hàng
            </NavLink>
            <img
              src={emptycart}
              alt="Empty Cart"
              className="card-img"
              height="500px"
              width="400px"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    items: state._todoProduct,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Cart);
