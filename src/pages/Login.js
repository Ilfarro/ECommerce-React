import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import IsiLogin from "../components/IsiLogin";

class Login extends Component {
  doLogin = () => {
    this.props.postLogin().then(() => {
      this.props.history.replace("/profile");
    });
  };

  render() {
    return (
      <div>
        <IsiLogin doLogin = { this.doLogin } />
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(Login));
