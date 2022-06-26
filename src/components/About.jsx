import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-12 my-5">
            <h1 className="text-black fw-bold mb-4">Về chúng tôi</h1>
            <p className="lead mb-4">
              " Được tạo nên từ các loại nguyên liệu hữu cơ, có nguồn gốc từ
              thiên nhiên, không sử dụng hóa chất gây hại, không chứa các loại
              hóc môn tăng trưởng, không chất bảo quản, không chất kích thích,
              không kháng sinh biến đổi gen (GMO), không chứa chất phụ gia nhân
              tạo, không hóa chất bảo vệ thực vật,… Hiện nay, đã có rất nhiều
              quốc gia đang sử dụng thực phẩm xanh thân thiện với môi trường
              trong đời sống hằng ngày, kể cả Việt Nam. Điều này đã mở ra một xu
              hướng mới trong quá trình ăn uống, đáp ứng các nhu cầu của người
              tiêu dùng xanh thời hiện đại. "
            </p>
            <NavLink to="/" className="btn btn-outline-dark ms-auto px-3">
              Đăng ký ngay
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
