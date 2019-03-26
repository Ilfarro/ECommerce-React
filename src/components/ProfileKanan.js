import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import ProfileHome from "../components/ProfileHome";
import ProfileIklanSaya from "../components/ProfileIklanSaya";

class ProfileKanan extends Component {
  render() {
    return (
      <div class="col-sm-9">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              href="#iklan"
              role="tab"
              aria-controls="iklan"
              aria-selected="false"
            >
              Iklan saya
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <ProfileHome />
          <div class="tab-pane" id="iklan">
            <br />
            <div class="container">
              <div class="row">
                {this.props.listIklanSaya.map((item, key) => {
                  return (
                    <ProfileIklanSaya
                      key={key}
                      id={item.id}
                      kategori={item.kategori}
                      nama={item.nama}
                      deskripsi={item.deskripsi}
                      harga={item.harga}
                      lokasi={item.lokasi}
                      url_foto={item.url_foto}
                      status_item={item.status_item}
                      post_by={item.post_by}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
    "is_login, listIklanSaya",
  actions
)(withRouter(ProfileKanan));
