import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import IsiSearchPage from "../components/IsiSearchPage";
import Pagination from "../components/Pagination";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItemsSearched: this.props.listIklanSearched
    };
  }

  render() {
    const { listItemsSearched } = this.state;
    return (
      <div>
        <div className="px-5">
          <h1 className="my-4">Hasil pencarian</h1>
          <hr />
          {listItemsSearched.map((item, key) => {
            return (
              <IsiSearchPage
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
  "is_login, listIklanSearched",
  actions
)(withRouter(SearchPage));
