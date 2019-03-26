import React, { Component } from "react";
import MainRoute from "./MainRoute";
import { withRouter } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer'

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainRoute />
        <Footer />
      </div>
    );
  }
}

export default withRouter(AppRouter);
