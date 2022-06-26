import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Kết nối với chúng tôi qua: </span>
        </div>

        <div>
          <a href="https:/facebook.com" className="me-4 text-reset">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https:/twitter.com" className="me-4 text-reset">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https:/google.com" className="me-4 text-reset">
            <i className="fa fa-google"></i>
          </a>
          <a href="https:/instagram.com" className="me-4 text-reset">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https:/linkedin.com" className="me-4 text-reset">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https:/github.com" className="me-4 text-reset">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>GRREN MARKET
              </h6>
              <p>
                Hệ thống cửa hàng hiện đã có mặt trên toàn quốc với số lượng mặt
                hàng đa dạng, giá cả phải chăng.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Sản phẩm</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Rau củ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Thịt
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Trái cây
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Hải sản
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Trang</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Trang chủ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Sản phẩm
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Giỏ hàng
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Thanh toán
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
              <p>
                <i className="fa fa-home me-3"></i> Thành phố Thủ Đức, Tp. HCM
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>
                greenmarket827@gmail.com
              </p>
              <p>
                <i className="fa fa-phone me-3"></i> + 03 964 274 46
              </p>
              <p>
                <i className="fa fa-print me-3"></i> + 03 964 274 46
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rbga(0,0,0,0.05" }}
      >
        © 2022 Copyright
        <a className="text-reset fw-bold text-decoration-none" href="/">
          <span> GreenMarket </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
