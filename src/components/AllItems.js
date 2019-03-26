import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "/detailitem/" + this.props.id
    };
  }

  render() {
    const { path } = this.state;
    return (
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card h-100">
          <a href="#">
            <Link to={path}>
              <img className="card-img-top" src={this.props.url_foto} alt="" />
            </Link>
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">
                <Link to={path}>{this.props.nama}</Link>
              </a>
            </h4>
            <p className="card-text">{this.props.deskripsi}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AllItems;
