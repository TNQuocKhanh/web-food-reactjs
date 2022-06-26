import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const togglePassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = JSON.parse(sessionStorage.getItem("my-key"));
    console.log(login.email, login.password);

    if (email === login.email && password === login.password) {
      alert("Đăng nhập thành công.");
      setIsLogin(true);
    } else {
      alert("Thông tin đăng nhập không hợp lệ.");
      setIsLogin(false);
    }

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-out me-1"></span>
        Đăng nhập
      </button>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="text-center" id="exampleModalLabel">
                Đăng nhập
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    required
                    type={hidePassword ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    onClick={togglePassword}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Hiện mật khẩu
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-5 my-5"
                >
                  Đăng nhập
                </button>
                <button className="btn btn-primary w-100 mb-4">
                  <span className="fa fa-google me-2"></span> Đăng nhập với
                  Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                  <span className="fa fa-facebook me-2"></span> Đăng nhập với
                  Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
