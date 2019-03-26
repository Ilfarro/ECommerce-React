import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import IsiEditIklan from "../components/IsiEditIklan";

const urlItems =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/public/items/";

class EditIklan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slicePath: this.props.location.pathname.slice(11)
    };
  }

  componentDidMount = () => {
    const self = this;
    this.props.setEditIklan(this.state.slicePath);
  };

  doEditIklan = () => {
    this.props.editIklan().then(() => {
      this.props.history.replace("/profile");
    });
  };

  render() {
    if (
      this.props.jumlah_iklan === 0 &&
      this.props.jumlah_iklan_premium === 0
    ) {
      return <Redirect to={{ pathname: "/package" }} />;
    }
    if (!this.props.is_login) {
      return <Redirect to={{ pathname: "/login" }} />;
    } else {
      return (
        <div>
          <IsiEditIklan doEditIklan={this.doEditIklan} />
        </div>
      );
    }
  }
}

export default connect(
  "is_login, jumlah_iklan, jumlah_iklan_premium",
  actions
)(withRouter(EditIklan));
