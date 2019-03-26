import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store";
import IsiKategoriRumah from "../components/IsiKategoriRumah";
import Pagination from "../components/Pagination";

// const urlItemsRumah = "http://localhost:5000/api/public/items?kategori=rumah";
// const urlItemsRumah = "http://3.0.47.101/api/public/items?kategori=rumah";
const urlItemsRumah = "http://rumahorang.web.id/api/public/items?kategori=rumah";

class KategoriRumah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItemsRumah: []
    };
  }

  componentDidMount = () => {
    const self = this;
    axios
      .get(urlItemsRumah)
      .then(function(response) {
        self.setState({ listItemsRumah: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { listItemsRumah } = this.state;
    return (
      <div>
        <div className="px-5">
          <h1 className="my-4">Rumah</h1>
          <hr />
          {listItemsRumah.map((item, key) => {
            return (
              <IsiKategoriRumah
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
)(withRouter(KategoriRumah));
