import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Pagination from "./Pagination";

import { actFetchProductsRequest, AddCart } from "../redux/actions";
import { connect } from "react-redux";

export class Product extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.actFetchProductsRequest();
  }

  render() {
    let { _products } = this.props._products;
    const filterProduct = (cat) => {
      const updatedList = _products.filter((x) => x.category === cat);
      console.log("UPDATE", updatedList);
    };

    const ShowProducts = () => {
      return (
        <>
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <div
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct()}
            >
              Tất cả
            </div>
            <div
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("Rau củ")}
            >
              Rau củ
            </div>
            <div
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("Trái cây")}
            >
              Trái cây
            </div>
            <div
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("Thịt")}
            >
              Thịt
            </div>
            <div
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("Hải sản")}
            >
              Hải sản
            </div>
          </div>
          {_products.map((item) => {
            return (
              <div className="col-md-3 mb-4" key={item.id}>
                <div className="card h-100 text-center p-4">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{item.name}</h5>
                    <p className="card-text lead fw-bold">{item.price} đ</p>
                    <NavLink
                      to="/products"
                      className="btn btn-outline-dark mx-2"
                      onClick={() => this.props.AddCart(item)}
                    >
                      Thêm vào giỏ
                    </NavLink>
                    <NavLink
                      to={`/products/${item.id}`}
                      className="btn btn-outline-dark"
                    >
                      Chi tiết
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      );
    };
    if (_products.length > 0) {
      return (
        <>
          <div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-12 my-5">
                  <h1 className="display-6 fw-border text-center">
                    Sản phẩm nổi bật
                  </h1>
                  <hr />
                </div>
              </div>
            </div>
            <div className="row justify-content-center mx-5">
              <ShowProducts />
              <Pagination />
            </div>
          </div>
        </>
      );
    }
    return (
      <div className="row px-5">
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
