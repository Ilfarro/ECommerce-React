import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "./Form.css";

class IsiPasangIklan extends Component {
  doPasang = () => {
    this.props.pasangIklan().then(() => {
      this.props.history.replace("/");
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-body">
              <h3 className="card-title text-center">Pasang Iklan</h3>
              <form onSubmit={e => e.preventDefault()} className="form-signin">
                <div className="form-label-group">
                  <select
                    onClick={e => this.props.setKategori(e)}
                    className="form-control"
                  >
                    <option value="" disabled selected>
                      Kategori
                    </option>
                    <option value="rumah">Rumah</option>
                    <option value="apartemen">Apartemen</option>
                    <option value="tanah">Tanah</option>
                  </select>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputJudulIklan"
                    className="form-control"
                    placeholder="Judul iklan"
                    required
                    name="pasangNama"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputJudulIklan">Judul iklan</label>
                </div>
                {/* <div className="form-label-group">
                  <textarea className="form-control" rows="4">
                    Deskripsi...
                  </textarea>
                </div> */}
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputDeskripsi"
                    className="form-control"
                    placeholder="Deskripsi"
                    required
                    name="pasangDeskripsi"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputDeskripsi">Deskripsi</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputHarga"
                    className="form-control"
                    placeholder="Harga"
                    required
                    name="pasangHarga"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputHarga">Harga</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputLokasi"
                    className="form-control"
                    placeholder="Lokasi"
                    required
                    name="pasangLokasi"
                    onChange={e => this.props.setField(e)}
                  />
                  <label for="inputLokasi">Lokasi</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputFoto"
                    className="form-control"
                    placeholder="URL Foto"
                    required
                    name="pasangUrlFoto"
                    onChange={e => this.props.setField(e)}
                  />
                  {/* <input
                    type="file"
                    multiple
                    id="inputFoto"
                    className="form-control"
                    placeholder="URL Foto"
                    required
                  /> */}
                  <label for="inputFoto">URL Foto</label>
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                  onClick={() => this.doPasang()}
                >
                  Pasang iklan
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
  "is_login",
  actions
)(withRouter(IsiPasangIklan));
