import React from "react";
import "../styles/carousel.scss";


const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
       

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={2000}>
            <img
              src="/assets/banner/statue-of-liberty-g05ff4e162_1280.jpg"
              className="d-block w-100 img"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <h1>Stand out in the Digital Age</h1>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="/assets/banner/teamwork-g802fe156b_1280.jpg"
              className="d-block w-100 img
              "
              alt="..."
            />
            <div class="carousel-caption  d-md-block">
              <h1>Open your business to the world</h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
