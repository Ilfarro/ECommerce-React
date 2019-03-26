import React, { Component } from "react";
import "./PremiumItems.css";

class PremiumItemsKey extends Component {
  render() {
    return (
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to={this.props.key}
      />
    );
  }
}

export default PremiumItemsKey;
