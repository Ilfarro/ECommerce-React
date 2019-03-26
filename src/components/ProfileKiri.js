import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class ProfileKiri extends Component {
  render() {
    return (
      <div class="col-sm-3">
        <div class="text-center">
          <img
            src={this.props.url_foto_user}
            class="img-circle img-thumbnail"
            alt="avatar"
          />
          <small>Upload foto lain...</small>
          <input type="file" class="text-center center-block file-upload" />
        </div>
        <hr />
        <br />

        <ul class="list-group">
          <li class="list-group-item text-muted">
            Sisa Package
            <i class="fa fa-dashboard fa-1x" />
          </li>
          <li class="list-group-item text-left">
            <span class="pull-left">
              <strong>Iklan Regular</strong>
            </span>{" "}
            {this.props.jumlah_iklan}
          </li>
          <li class="list-group-item text-left">
            <span class="pull-left">
              <strong>Iklan Premium</strong>
            </span>{" "}
            {this.props.jumlah_iklan_premium}
          </li>
          <li class="list-group-item text-left">
            <span class="pull-left">
              <strong>Status Pengguna</strong>
            </span>{" "}
            {this.props.user_status}
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  "is_login, jumlah_iklan, jumlah_iklan_premium, url_foto_user, user_status",
  actions
)(withRouter(ProfileKiri));
