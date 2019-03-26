import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store";
import IsiKategoriTanah from "../components/IsiKategoriTanah";
import Pagination from "../components/Pagination";

// const urlItemsTanah = "http://localhost:5000/api/public/items?kategori=tanah";
// const urlItemsTanah = "http://3.0.47.101/api/public/items?kategori=tanah";
const urlItemsTanah = "http://rumahorang.web.id/api/public/items?kategori=tanah";

class KategoriTanah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItemsTanah: []
    };
  }

  componentDidMount = () => {
    const self = this;
    axios
      .get(urlItemsTanah)
      .then(function(response) {
        self.setState({ listItemsTanah: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { listItemsTanah } = this.state;
    return (
      <div>
        <div className="px-5">
          <h1 className="my-4">Rumah</h1>
          <hr />
          {listItemsTanah.map((item, key) => {
            return (
              <IsiKategoriTanah
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
)(withRouter(KategoriTanah));
