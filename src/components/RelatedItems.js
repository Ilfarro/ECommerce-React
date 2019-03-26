import React, { Component } from "react";
import { Link } from "react-router-dom";

class RelatedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "/detailitem/" + this.props.id
    };
  }
  render() {
    const { path } = this.state;
    return (
      <div class="col-md-3 col-sm-6 mb-4">
        <a href="#">
          <Link to={path}>
            <img class="img-fluid" src={this.props.url_foto} alt="" />
          </Link>
        </a>
      </div>
    );
  }
}

export default RelatedItems;
