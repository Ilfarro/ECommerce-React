import React, { Component } from "react";

class IsiCart extends Component {
  render() {
    return (
      <tr>
        <td className="col-md-8">
          <div className="media">
            <div className="media-body">
              <h4 className="media-heading">
                <a href="#">{this.props.nama_package}</a>
              </h4>
              <span>Payment method: </span>
              <span>
                <strong>Via indomaret</strong>
              </span>
            </div>
          </div>
        </td>
        <td className="col-md-1" style={{ textAlign: "center" }}>
          <strong>{this.props.quantity}</strong>
        </td>
        <td className="col-md-1 text-center">
          <strong>{this.props.harga},-</strong>
        </td>
        <td className="col-md-1 text-center">
          <strong>{this.props.harga},-</strong>
        </td>
        <td className="col-md-1">
          <button
            onClick={e => this.props.removeCart(e, this.props.id)}
            type="button"
            className="btn btn-danger"
          >
            <span className="glyphicon glyphicon-remove" /> Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default IsiCart;
