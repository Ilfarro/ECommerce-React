import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";
import "./Form.css";

class IsiRegister extends Component {
  doRegister = () => {
    this.props.register().then(() => {
      this.props.history.replace("/login");
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left d-none d-md-flex" />
            <div className="card-body">
              <h3 className="card-title text-center">Daftar</h3>
              <form onSubmit={e => e.preventDefault()} className="form-signin">
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputFirstName"
                    className="form-control"
                    placeholder="Nama depan"
                    required
                    autofocus
                    name="registerFirstName"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputFirstName">Nama depan</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputLastName"
                    className="form-control"
                    placeholder="Nama belakang"
                    required
                    autofocus
                    name="registerLastName"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputLastName">Nama belakang</label>
                </div>
                <hr />
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Alamat email"
                    required
                    name="registerEmail"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputEmail">Alamat email</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputPhone"
                    className="form-control"
                    placeholder="Nomor telepon"
                    required
                    autofocus
                    name="registerPhone"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputPhone">Nomor telepon</label>
                </div>
                <hr />
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputUserame"
                    className="form-control"
                    placeholder="Username"
                    required
                    autofocus
                    name="reigsterUsername"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputUserame">Username</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    name="registerPassword"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputPassword">Password</label>
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                  onClick={() => this.doRegister()}
                >
                  Daftar
                </button>
                <a className="d-block text-center mt-2 small" href="#">
                  <Link to="/login">Sudah punya akun? Masuk</Link>
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
  )(withRouter(IsiRegister));
  