import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "./Form.css";

class IsiEditIklan extends Component {
  render() {
    console.log("JUMLAHIKLAN", this.props.jumlah_iklan_premium);
    return (
      <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <div class="card card-signin flex-row my-5">
            <div class="card-body">
              <h3 class="card-title text-center">Edit iklan</h3>
              <form onSubmit={e => e.preventDefault()} class="form-signin">
                <div class="form-label-group">
                  <select
                    onClick={e => this.props.setEditIklanKategori(e)}
                    class="form-control"
                  >
                    <option value="" disabled selected>
                      Kategori
                    </option>
                    <option value="rumah">Rumah</option>
                    <option value="apartemen">Apartemen</option>
                    <option value="tanah">Tanah</option>
                  </select>
                </div>
                <div class="form-label-group">
                  <input
                    type="text"
                    id="inputJudulIklan"
                    class="form-control"
                    placeholder={this.props.editIklanNama}
                    name="editIklanNama"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputJudulIklan">Judul iklan</label>
                </div>
                <div class="form-label-group">
                  <input
                    type="text"
                    id="inputDeskripsiIklan"
                    class="form-control"
                    placeholder={this.props.editIklanDeskripsi}
                    name="editIklanDeskripsi"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputDeskripsiIklan">Deskripsi</label>
                </div>
                <div class="form-label-group">
                  <input
                    type="text"
                    id="inputHarga"
                    class="form-control"
                    placeholder={this.props.editIklanHarga}
                    name="editIklanHarga"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputHarga">Harga</label>
                </div>
                <div class="form-label-group">
                  <input
                    type="text"
                    id="inputLokasi"
                    class="form-control"
                    placeholder={this.props.editIklanLokasi}
                    name="editIklanLokasi"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputLokasi">Lokasi</label>
                </div>
                <div class="form-label-group">
                  <input
                    type="text"
                    id="inputUrlFoto"
                    class="form-control"
                    placeholder={this.props.editIklanUrlFoto}
                    name="editIklanUrlFoto"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputUrlFoto">URL Foto</label>
                </div>

                {/* {this.props.jumlah_iklan != undefined &&
                  this.props.jumlah_iklan_premium != undefined && (
                    <div class="form-label-group">
                      <select
                        onClick={e => this.props.setEditIklanStatus(e)}
                        class="form-control"
                      >
                        <option value="" disabled selected>
                          Status iklan
                        </option>
                        <option value="regular">Regular</option>
                        <option value="premium">Premium</option>
                      </select>
                    </div>
                  )}
                {this.props.jumlah_iklan == undefined && (
                    <div class="form-label-group">
                      <select
                        onClick={e => this.props.setEditIklanStatus(e)}
                        class="form-control"
                      >
                        <option value="" disabled selected>
                          Status iklan
                        </option>
                        <option value="premium">Premium</option>
                      </select>
                    </div>
                  )}
                {this.props.jumlah_iklan_premium == undefined && (
                    <div class="form-label-group">
                      <select
                        onClick={e => this.props.setEditIklanStatus(e)}
                        class="form-control"
                      >
                        <option value="" disabled selected>
                          Status iklan
                        </option>
                        <option value="regular">Regular</option>
                      </select>
                    </div>
                  )} */}

                <div class="form-label-group">
                  <select
                    onClick={e => this.props.setEditIklanStatus(e)}
                    class="form-control"
                  >
                    <option value="" disabled selected>
                      Status iklan
                    </option>
                    <option value="regular">Regular</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>
                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                  onClick={() => this.props.doEditIklan()}
                >
                  Edit iklan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login, jumlah_iklan, jumlah_iklan_premium editIklanNama, editIklanDeskripsi, editIklanHarga, editIklanLokasi, editIklanUrlFoto, idEditIklan",
  actions
)(withRouter(IsiEditIklan));
