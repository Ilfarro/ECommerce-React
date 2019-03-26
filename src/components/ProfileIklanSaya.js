import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";

class ProfileIklanSaya extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "/editiklan/" + this.props.id,
      pathDetailItem: "/detailitem/" + this.props.id
    };
  }

  doDeleteIklan = () => {
    this.props.deleteIklan(this.props.id).then(() => {
      this.props.history.replace("/");
    });
  };

  render() {
    const { path, pathDetailItem } = this.state;
    return (
      <div class="col-xl-6 col-md-6 mb-4">
        <div class="card border-0 shadow">
          <Link to={pathDetailItem}>
            <img src={this.props.url_foto} class="card-img-top" alt="..." />
          </Link>
          <div class="card-body text-center">
            <a href="#">
              <h5 class="card-title mb-0">
                <Link to={pathDetailItem}>{this.props.nama}</Link>
              </h5>
            </a>
            <div class="card-text text-black-50">{this.props.lokasi}</div>
            <button className="btn btn-success" >{this.props.status_item}</button>
            <div className="row justify-content-between">
              <div className="text-left">
                <Link to={path} className="btn btn-outline-info btn-sm mt-auto">
                  Edit iklan
                </Link>
              </div>
              <div className="text-right">
                <button
                  onClick={() => this.doDeleteIklan()}
                  className="btn btn-outline-danger btn-sm mt-auto"
                >
                  Hapus iklan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
    "is_login",
    actions
  )(withRouter(ProfileIklanSaya));
  