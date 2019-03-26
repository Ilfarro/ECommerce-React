import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";
import { Link } from "react-router-dom";

const urlTransaction =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/transaction";

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionResponse: "",
      payment_method: "Transfer ATM"
    };
  }

  componentDidMount = () => {
    const self = this;
    const header = {
      headers: {
        Authorization: "Bearer " + this.props.token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    axios
      .post(
        urlTransaction,
        { payment_method: this.state.payment_method },
        header
      )
      .then(response => {
        if (response.data.hasOwnProperty("data")) {
          self.setState({ transactionResponse: response.data.data });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { transactionResponse } = this.state;
    if (!this.props.is_login) {
      return <Redirect to={{ pathname: "/login" }} />;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-offset-1">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th className="text-center"> </th>
                    <th className="text-center">Total</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-md-8">
                      <div className="media">
                        <div className="media-body">
                          <h4 className="media-heading">
                            <a href="#">All Package</a>
                          </h4>
                          <span>Payment method: </span>
                          <span>
                            <strong>
                              {transactionResponse.payment_method}
                            </strong>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="col-md-1" style={{ textAlign: "center" }}>
                      <strong>{transactionResponse.total_quantity}</strong>
                    </td>
                    <td className="col-md-1 text-center">
                      <strong> </strong>
                    </td>
                    <td className="col-md-1 text-center">
                      <strong>{transactionResponse.total_harga},-</strong>
                    </td>
                    <td className="col-md-1">
                      <button type="button" className="btn btn-success">
                        <span className="glyphicon glyphicon-remove" /> Paid
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td>
                      <h3>Total</h3>
                    </td>
                    <td className="text-right">
                      <h3>
                        <strong>{transactionResponse.total_harga},-</strong>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>
                      <Link to="/" className="btn btn-info">
                        Home <span className="glyphicon glyphicon-play" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "is_login, token",
  actions
)(withRouter(Transaction));
