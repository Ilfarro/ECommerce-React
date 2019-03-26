import React, { Component } from "react";
import { Link } from "react-router-dom";

class IsiKategoriTanah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "/detailitem/" + this.props.id
    };
  }

  render() {
    const { path } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img
                className="img-fluid rounded mb-3 mb-md-0"
                src={this.props.url_foto}
                alt=""
              />
            </a>
          </div>
          <div className="col-md-5 d-flex flex-column">
            <h3>{this.props.nama}</h3>
            <p>{this.props.deskripsi}</p>
            <h4 style={{ color: "#85bb65" }}>Rp. {this.props.harga},-</h4>
            <Link to={path} className="btn btn-outline-info btn-sm mt-auto">
              Lihat Detail
            </Link>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default IsiKategoriTanah;
