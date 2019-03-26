import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class ProfileHome extends Component {
  doEditUser = () => {
    this.props.editUser().then(() => {
      this.props.history.replace("/");
    });
  };

  render() {
    return (
      <div className="tab-pane active" id="home">
        <br />
        <form
          onSubmit={e => e.preventDefault()}
          className="form"
          action="##"
          method="post"
          id="registrationForm"
        >
          <div className="form-group">
            <div className="col-xs-6">
              <label for="first_name">
                <h4>Nama depan</h4>
              </label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                id="first_name"
                placeholder={this.props.first_name}
                onChange={e => this.props.setField(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-6">
              <label for="last_name">
                <h4>Nama belakang</h4>
              </label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                id="last_name"
                placeholder={this.props.last_name}
                onChange={e => this.props.setField(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-6">
              <label for="email">
                <h4>Email</h4>
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder={this.props.email}
                onChange={e => this.props.setField(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-6">
              <label for="phone">
                <h4>Nomor telepon</h4>
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder={this.props.phone}
                onChange={e => this.props.setField(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-6">
              <label for="urlFoto">
                <h4>URL Foto</h4>
              </label>
              <input
                type="text"
                className="form-control"
                name="url_foto_user"
                id="urlFoto"
                placeholder={this.props.url_foto_user}
                onChange={e => this.props.setField(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-6">
              <label for="password">
                <h4>Password</h4>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder={this.props.password}
                onChange={e => this.props.setField(e)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-12 text-right">
              <br />
              <button
                onClick={() => this.doEditUser()}
                className="btn btn-lg btn-success"
                type="submit"
              >
                <i className="glyphicon glyphicon-ok-sign" /> Save
              </button>
            </div>
          </div>
        </form>
        <hr />
      </div>
    );
  }
}

export default connect(
  "is_login, first_name, last_name, email, phone, password, url_foto_user",
  actions
)(withRouter(ProfileHome));
