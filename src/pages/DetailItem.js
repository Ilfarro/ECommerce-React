import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import CarouselDetailItem from "../components/CarouselDetailItem";
import ItemDescription from "../components/ItemDescription";
import KolomPengiklan from "../components/KolomPengiklan";
import RelatedItems from "../components/RelatedItems";
import axios from "axios";

const urlItems =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/public/items/";
const urlSearch =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/public/items?search=";

class DetailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetails: "",
      itemDetailsKategori: "",
      listRelatedItems: []
    };
  }

  componentDidMount = () => {
    const self = this;
    const slicePath = this.props.location.pathname.slice(12);
    const urlGabungan = urlItems + slicePath;
    axios
      .get(urlGabungan)
      .then(async response => {
        self.setState({
          itemDetails: response.data,
          itemDetailsKategori: response.data.kategori
        });
        await axios
          .get(urlSearch + this.state.itemDetailsKategori)
          .then(function(response) {
            self.setState({
              listRelatedItems: response.data.data
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidUpdate = () => {
    const self = this;
    const slicePath = this.props.location.pathname.slice(12);

    const urlGabungan = urlItems + slicePath;
    axios
      .get(urlGabungan)
      .then(async response => {
        self.setState({
          itemDetails: response.data,
          itemDetailsKategori: response.data.kategori
        });
        await axios
          .get(urlSearch + this.state.itemDetailsKategori)
          .then(function(response) {
            self.setState({
              listRelatedItems: response.data.data
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { itemDetails, listRelatedItems } = this.state;
    console.log("LIST RELATED", listRelatedItems);
    return (
      <div class="px-5">
        <h1 class="my-4">{itemDetails.nama}</h1>
        <hr />
        <div class="row">
          <CarouselDetailItem url_foto={itemDetails.url_foto} />
          <ItemDescription
            deskripsi={itemDetails.deskripsi}
            harga={itemDetails.harga}
            post_by={itemDetails.post_by}
          />
          <KolomPengiklan />
        </div>
        <div>
          <hr />
          <h3 class="my-4">Properti Terkait</h3>
          <div class="row">
            {listRelatedItems.slice(0, 4).map((item, key) => {
              return (
                <RelatedItems key={key} id={item.id} url_foto={item.url_foto} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(DetailItem));
