import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store";
import IsiKategoriApartemen from "../components/IsiKategoriApartemen";
import Pagination from "../components/Pagination";

// const urlItemsApartemen = "http://localhost:5000/api/public/items?kategori=apartemen";
// const urlItemsApartemen = "http://3.0.47.101/api/public/items?kategori=apartemen";
const urlItemsApartemen = "http://rumahorang.web.id/api/public/items?kategori=apartemen";

class KategoriApartemen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItemsApartemen: []
    };
  }

  componentDidMount = () => {
    const self = this;
    axios
      .get(urlItemsApartemen)
      .then(function(response) {
        self.setState({ listItemsApartemen: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { listItemsApartemen } = this.state;
    return (
      <div>
        <div className="px-5">
          <h1 className="my-4">Apartemen</h1>
          <hr />
          {listItemsApartemen.map((item, key) => {
            return (
              <IsiKategoriApartemen
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
          <Pagination />
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(KategoriApartemen));
