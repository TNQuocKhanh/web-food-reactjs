import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);
  const [show, setShow] = useState(true);

  const togglePassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const signup = {
      email,
      password,
    };
    // console.log(login);
    sessionStorage.setItem("my-key", JSON.stringify(signup));
    alert("Đăng ký thành công.");

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setShow(false);
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-dark ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <span className="fa fa-user-plus me-1"></span> Đăng ký
      </button>

      <div
        className="modal fade"
        id="signupModal"
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
                Đăng ký
              </h5>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">
                    Email
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="exampleInput"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail2" className="form-label">
                    Mật khẩu
                  </label>
                  <input
                    required
                    type={hidePassword ? "text" : "password"}
                    className="form-control"
                    id="exampleInputEmail2"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword2" className="form-label">
                    Nhập lại mật khẩu
                  </label>
                  <input
                    required
                    type={hidePassword ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword2"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                    onClick={togglePassword}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck2">
                    Hiện mật khẩu
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-5 my-5"
                >
                  Đăng ký
                </button>
                <button className="btn btn-primary w-100 mb-4">
                  <span className="fa fa-google me-2"></span> Đăng ký với Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                  <span className="fa fa-facebook me-2"></span> Đăng ký với
                  Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
