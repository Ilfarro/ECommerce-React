import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import IsiRegister from "../components/IsiRegister";

class Register extends Component {
  render() {
    return (
      <div>
        <IsiRegister />
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(Register));
