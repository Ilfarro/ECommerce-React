import React, { Component } from "react";

class ItemDescription extends Component {
  render() {
    return (
      <div className="col-md-8">
        <hr />
        <h3 className="my-3">Deskripsi Rumah</h3>
        <p>{this.props.deskripsi}</p>
        <h3 className="my-3">Detail Rumah</h3>
        <ul>
          <li>
            Luas Bangunan: 250 m<sup>2</sup>
          </li>
          <li>
            Luas Tanah: 400 m<sup>2</sup>
          </li>
          <li>Jumlah Lantai: 2</li>
          <li>Kamar Tidur: 4</li>
          <li>Kamar Mandi: 2</li>
          <li>Kapasitas Garasi: 1 Mobil</li>
        </ul>
        <h3>Harga</h3>
        <h4 className="my-3" style={{ color: "#85bb65" }}>
          Rp. {this.props.harga},-
        </h4>
      </div>
    );
  }
}

export default ItemDescription;
