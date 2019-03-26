import React, { Component } from "react";
import "./IsiPackage.css";

class IsiPackage extends Component {
  render() {
    return (
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {/* Regular */}
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    Regular
                  </h5>
                  <h6 class="card-price text-center">
                    Rp. 25.000.-
                    <span class="period" />
                  </h6>
                  <hr />
                  <ul class="fa-ul">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check" />
                      </span>
                      1 Iklan
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check" />
                      </span>
                      0 Iklan Premium
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check" />
                      </span>
                      Customer Service
                    </li>
                  </ul>
                  <a
                    onClick={e => this.props.addToCart(e, 1)}
                    href="#"
                    class="btn btn-block btn-primary text-uppercase"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            {/* Silver */}
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    Silver
                  </h5>
                  <h6 class="card-price text-center">
                    Rp. 50.000,-
                    <span class="period" />
                  </h6>
                  <hr />
                  <ul class="fa-ul">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check" />
                      </span>
                      3 Iklan
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check" />
                      </span>
                      1 Iklan Premium
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check" />
                      </span>
                      Customer Service
                    </li>
                  </ul>
                  <a
                    onClick={e => this.props.addToCart(e, 2)}
                    href="#"
                    class="btn btn-block btn-primary text-uppercase"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            {/* Gold */}
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    Gold
                  </h5>
                  <h6 class="card-price text-center">
                    Rp. 100.000,-
                    <span class="period" />
                  </h6>
                  <hr />
                  <ul class="fa-ul">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check" />
                      </span>
                      8 Iklan
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check" />
                      </span>
                      3 Iklan Premium
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check" />
                      </span>
                      Customer Service
                    </li>
                  </ul>
                  <a
                    onClick={e => this.props.addToCart(e, 3)}
                    href="#"
                    class="btn btn-block btn-primary text-uppercase"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IsiPackage;
