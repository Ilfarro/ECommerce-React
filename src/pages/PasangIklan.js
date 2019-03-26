import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import IsiPasangIklan from "../components/IsiPasangIklan";

class PasangIklan extends Component {
  render() {
    if (this.props.jumlah_iklan === 0 && this.props.jumlah_iklan_premium === 0) {
      return <Redirect to={{ pathname: "/package" }} />;
    }
    if (!this.props.is_login) {
      return <Redirect to={{ pathname: "/login" }} />;
    } else {
      return (
        <div>
          <IsiPasangIklan />
        </div>
      );
    }
  }
}

export default connect(
  "is_login, jumlah_iklan, jumlah_iklan_premium",
  actions
)(withRouter(PasangIklan));
