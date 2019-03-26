import React, { Component } from "react";
import "./PremiumItems.css";
import PremiumItemsKey from "../components/PremiumItemsKey";
import PremiumItemsDynamic from "../components/PremiumItemsDynamic";

class PremiumItems extends Component {
  render() {
    return (
      <div>
        <header>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              {this.props.listPremiumItems.map((item, key) => {
                return (
                  <PremiumItemsKey
                    key={key}
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
              {/* <li
                data-target="#carouselExampleIndicators"
                data-slide-to={this.props.key}
              /> */}
            </ol>
            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://images.unsplash.com/photo-1533682850979-2f18860789d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" +
                    ")"
                }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="display-4">Rumah Merah</h3>
                  <p className="lead">Malang</p>
                </div>
              </div>
              {this.props.listPremiumItems.map((item, key) => {
                return (
                  <PremiumItemsDynamic
                    key={key}
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
              {/* <div
                className="carousel-item"
                style={{
                  backgroundImage: "url(" + "{this.props.url_foto}" + ")"
                }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3 className="display-4">{this.props.nama}</h3>
                  <p className="lead">{this.props.lokasi}</p>
                </div>
              </div> */}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </header>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default PremiumItems;
