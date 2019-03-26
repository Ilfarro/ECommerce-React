import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "./KolomPengiklan.css";
import pengiklan from "../images/crop-1280x720-000.jpg";
import axios from "axios";

// const urlUser = 

class KolomPengiklan extends Component {

//   componentDidMount = () => {
//     const self = this;
//     const urlGabungan = urlItems + this.state.slicePath;
//     axios
//       .get(urlGabungan)
//       .then(function(response) {
//         self.setState({ itemDetails: response.data });
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   };

  render() {
    return (
      <div class="col-md-4">
        <hr />
        <div class="card" id="small-profile">
          <h4>Pengiklan</h4>
          <img src={pengiklan} alt="Kabib" style={{ width: "100%" }} />
          <br />
          <h3>
            <b>
              {this.props.first_name} {this.props.last_name}
            </b>
          </h3>
          <small>Nomor telepon: {this.props.phone}</small>
          <hr />
          <button type="button" class="btn btn-link">
            Hubungi pengiklan
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login, first_name, last_name, phone",
  actions
)(withRouter(KolomPengiklan));
