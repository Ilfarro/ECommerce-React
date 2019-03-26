import React, { Component } from "react";
import rumahpantai from "../images/sebastian-staines-1405934-unsplash.jpg";

class CarouselDetailItem extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div
          id="carousel-thumb"
          className="carousel slide carousel-fade carousel-thumbnails"
          data-ride="carousel"
        >
          {/* Slides */}
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                className="d-block h-100"
                src={this.props.url_foto}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block h-100"
                src={rumahpantai}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block h-100"
                src={this.props.url_foto}
                alt="Third slide"
              />
            </div>
          </div>
          {/* Slides */}
          {/* Controls */}
          <a
            className="carousel-control-prev"
            href="#carousel-thumb"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-thumb"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
          {/* Controls */}
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-thumb"
              data-slide-to="0"
              className="active"
            >
              {" "}
              <img
                className="d-block w-100"
                src={this.props.url_foto}
                className="img-fluid"
              />
            </li>
            <li data-target="#carousel-thumb" data-slide-to="1">
              <img
                className="d-block w-100"
                src={rumahpantai}
                className="img-fluid"
              />
            </li>
            <li data-target="#carousel-thumb" data-slide-to="2">
              <img
                className="d-block w-100"
                src={this.props.url_foto}
                className="img-fluid"
              />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default CarouselDetailItem;
