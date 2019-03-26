import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import IsiCart from "../components/IsiCart";
import axios from "axios";
import { Link } from "react-router-dom";

const urlCart =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/cart";

const urlCartRemove =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/cart/";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCart: [],
      cart_id_state: ""
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
      .get(urlCart, header)
      .then(function(response) {
        self.setState({ listCart: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidUpdate = () => {
    const self = this;
    const header = {
      headers: {
        Authorization: "Bearer " + this.props.token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    axios
      .get(urlCart, header)
      .then(function(response) {
        self.setState({ listCart: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  removeCart = async (e, cart_id) => {
    const header = {
      headers: {
        Authorization: "Bearer " + this.props.token,
        "Access-Control-Allow-Origin": "*"
      }
    };
    this.setState({ cart_id_state: cart_id });
    await axios
      .delete(urlCartRemove + cart_id, header)
      .then(response => {
        if (response.data.hasOwnProperty("status")) {
          console.log("success");
        }
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(() => {
        this.props.history.replace("/cart");
      });
  };

  render() {
    const { listCart } = this.state;
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
                    <th className="text-center">Price</th>
                    <th className="text-center">Total</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {listCart.map((item, key) => {
                    return (
                      <IsiCart
                        key={key}
                        id={item.id}
                        cart_user_id={item.user_id}
                        package_id={item.package_id}
                        transaction_id={item.transaction_id}
                        nama_package={item.nama_package}
                        quantity={item.quantity}
                        harga={item.harga}
                        created_at={item.created_at}
                        updated_at={item.updated_at}
                        removeCart={this.removeCart}
                      />
                    );
                  })}
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>
                      <Link to="/transaction" className="btn btn-success">
                        Checkout <span className="glyphicon glyphicon-play" />
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
)(withRouter(Cart));
