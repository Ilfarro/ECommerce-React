import React, { Component } from "react";
import "./PremiumItems.css";

class PremiumItemsDynamic extends Component {
  render() {
    return (
      <div
        className="carousel-item"
        style={{
          backgroundImage: "url(" + this.props.url_foto + ")"
        }}
      >
        <div className="carousel-caption d-none d-md-block">
          <h3 className="display-4">{this.props.nama}</h3>
          <p className="lead">{this.props.lokasi}</p>
        </div>
      </div>
    );
  }
}

export default PremiumItemsDynamic;
