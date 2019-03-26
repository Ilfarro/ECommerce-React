import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import ProfileKiri from "../components/ProfileKiri";
import ProfileKanan from "../components/ProfileKanan";

class Profile extends Component {
  componentDidMount = () => {
    this.props.getUserData();
  };

  render() {
    if (!this.props.is_login) {
      return <Redirect to={{ pathname: "/login" }} />;
    } else {
      return (
        <div class="container">
          <div class="row">
            <div class="col-sm-10">
              <h1>
                {this.props.first_name} {this.props.last_name}
              </h1>
            </div>
          </div>
          <div class="row">
            <ProfileKiri />
            <ProfileKanan />
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "is_login, token, user_id, first_name, last_name",
  actions
)(withRouter(Profile));
