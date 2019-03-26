import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";
import "./Form.css";

class IsiLogin extends Component {
  render() {
    console.log("Propsss", this.props);
    return (
      <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <div class="card card-signin flex-row my-5">
            <div class="card-img-left d-none d-md-flex" />
            <div class="card-body">
              <h3 class="card-title text-center">Masuk</h3>
              <form class="form-signin" onSubmit={e => e.preventDefault()}>
                <div class="form-label-group">
                  <input
                    type="text"
                    id="inputUserame"
                    class="form-control"
                    placeholder="Username"
                    required
                    autofocus
                    name="username"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputUserame">Username</label>
                </div>
                <div class="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required
                    name="password"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputPassword">Password</label>
                </div>
                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                  onClick={() => this.props.doLogin()}
                >
                  Masuk
                </button>
                <a class="d-block text-center mt-2 small" href="#">
                  Lupa password?
                </a>
                <a class="d-block text-center mt-2 small" href="#">
                  <Link to="/register">Belum punya akun? Daftar disini...</Link>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(IsiLogin));
