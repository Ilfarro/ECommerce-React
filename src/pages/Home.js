import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import PremiumItems from "../components/PremiumItems";
import AllItems from "../components/AllItems";
import Pagination from "../components/Pagination";
import axios from "axios";

const urlPublicItems =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/public/items";
const urlPremiumItems =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/public/items?status_item=premium";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      listPremiumItems: []
    };
  }

  componentDidMount = () => {
    const self = this;
    axios
      .get(urlPublicItems)
      .then(function(response) {
        self.setState({ listItems: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get(urlPremiumItems)
      .then(function(response) {
        self.setState({ listPremiumItems: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { listItems, listPremiumItems } = this.state;
    return (
      <div>
        <PremiumItems listPremiumItems={listPremiumItems} />
        <div className="row px-5">
          {listItems.map((item, key) => {
            return (
              <AllItems
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
        <Pagination />
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(Home));
