import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../store";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  doLogin = () => {
    this.props.postLogin().then(() => {
      this.props.history.replace("/profile");
    });
  };

  doSearch = () => {
    this.props.search().then(() => {
      this.props.history.replace("/searchpage");
    });
  };

  render() {
    return (
      <div>
        <nav className="navigasi navbar fixed-top navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <Link to="/" className="btn text-light">
              RumahOrang.web.id
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/rumah" className="btn text-light">
                    Rumah
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/apartemen" className="btn text-light">
                    Apartemen
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/tanah" className="btn text-light">
                    Tanah
                  </Link>
                </a>
              </li>
            </ul>
            <form
              onSubmit={e => e.preventDefault()}
              className="form-inline my-2 my-lg-0"
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                name="searchKeyword"
                onChange={e => this.props.setField(e)}
              />
              <button
                className="btn btn-outline-light"
                type="submit"
                onClick={() => this.doSearch()}
              >
                Go!
              </button>
            </form>

            {/* HAVE NOT LOGIN */}
            {this.props.is_login == false && (
              <ul className="navbar-nav ml-3">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Akun
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    style={{ minWidth: "250px" }}
                    aria-labelledby="navbarDropdown"
                  >
                    <form
                      className="px-4 py-3"
                      onSubmit={e => e.preventDefault()}
                    >
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          className="form-control"
                          placeholder="username"
                          type="text"
                          name="username"
                          onChange={e => this.props.setField(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className="form-control"
                          placeholder="Password"
                          type="password"
                          name="password"
                          onChange={e => this.props.setField(e)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={() => this.doLogin()}
                      >
                        Login
                      </button>
                    </form>
                    <hr className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <Link to="/register" className="btn">
                        Buat akun baru
                      </Link>
                    </a>
                    <a className="dropdown-item" href="#">
                      <Link to="/login" className="btn">
                        Halaman login
                      </Link>
                    </a>
                  </div>
                </li>
              </ul>
            )}

            {/* HAVE LOGIN */}
            {this.props.is_login == true && (
              <ul className="navbar-nav ml-3">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Akun
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    style={{ minWidth: "250px" }}
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item">
                      Hallo {this.props.last_name}
                    </a>
                    <hr className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <Link to="/profile" className="btn">
                        Profil Saya
                      </Link>
                    </a>
                    <a className="dropdown-item" href="#">
                      <Link to="/package" className="btn">
                        Package
                      </Link>
                    </a>
                    <a className="dropdown-item" href="#">
                      <Link to="/cart" className="btn">
                        Cart
                      </Link>
                    </a>
                    <a className="dropdown-item" href="#">
                      <Link to="/pasangiklan" className="btn">
                        Pasang Iklan
                      </Link>
                    </a>
                    <hr className="dropdown-divider" />
                    <div className="px-4 py-3">
                      <button
                        type="submit"
                        className="btn btn-danger btn-block"
                        onClick={() => this.props.postLogout()}
                      >
                        <Link to="/" className="btn">
                          Logout
                        </Link>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </nav>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default connect(
  "is_login, last_name",
  actions
)(withRouter(Header));
