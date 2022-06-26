import React from "react";
import { connect } from "react-redux";

const Checkout = ({ items }) => {
  let TotalCart = 0;
  let ListCart = [];
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3 text-center">Thông tin đặt hàng</h4>
            <form className="needs-validation">
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Họ và tên
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    placeholder="test@example.com"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Ho Chi Minh City"
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    required
                  />
                </div>
              </div>

              <div className="col-md-5 col-lg-4 order-md-last my-5">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Giỏ hàng</span>
                  <span className="badge bg-primary rounded-pill">
                    {ListCart.length}
                  </span>
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Tổng cộng:</span>
                    <strong>{Number(TotalCart).toLocaleString("en-US")}</strong>
                  </li>
                </ul>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Thanh toán ngay
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
    items: state._todoProduct,
  };
};

export default connect(mapStateToProps, {})(Checkout);
