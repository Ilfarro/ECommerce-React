import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import IsiPackage from "../components/IsiPackage";
import "../components/IsiPackage.css";
import axios from "axios";

const urlCart =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/cart";

class Package extends Component {
  constructor(props) {
    super(props);
    this.state = {
      package_id_state: ""
    };
  }

  addToCart = (e, package_id) => {
    const header = {
      headers: {
        Authorization: "Bearer " + this.props.token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    this.setState({ package_id_state: package_id });
    axios
      .post(urlCart, { package_id: package_id }, header)
      .then(response => {
        if (response.data.hasOwnProperty("jumlah_iklan")) {
          console.log("success");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    if (!this.props.is_login) {
      return <Redirect to={{ pathname: "/login" }} />;
    } else {
      return (
        <div>
          <IsiPackage addToCart={this.addToCart} />
        </div>
      );
    }
  }
}

export default connect(
  "is_login, token",
  actions
)(withRouter(Package));
