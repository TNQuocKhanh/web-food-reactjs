import React from "react";
import Product from "./Product";

import slide5 from "../assets/slide5.jpeg";
import slide4 from "../assets/slide4.jpeg";
import slide6 from "../assets/slide6.jpeg";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide my-5 py-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner w-80">
          <div className="carousel-item active">
            <img src={slide5} className="d-block w-100" alt="slide" />
          </div>
          <div className="carousel-item">
            <img src={slide4} className="d-block w-100" alt="slide" />
          </div>
          <div className="carousel-item">
            <img src={slide6} className="d-block w-100" alt="slide" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product />
    </div>
  );
};

export default Home;
