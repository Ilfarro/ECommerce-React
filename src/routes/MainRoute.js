import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from '../pages/Home';
import KategoriRumah from '../pages/KategoriRumah'
import KategoriApartemen from "../pages/KategoriApartemen";
import KategoriTanah from "../pages/KategoriTanah";
import DetailItem from '../pages/DetailItem'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Package from "../pages/Package";
import Profile from "../pages/Profile";
import PasangIklan from "../pages/PasangIklan";
import EditIklan from "../pages/EditIklan";
import Cart from "../pages/Cart";
import Transaction from "../pages/Transaction";
import SearchPage from "../pages/SearchPage";
// import NotMatch from '../pages/NotMatch';

class MainRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/rumah' component = {KategoriRumah} />
        <Route exact path='/apartemen' component = {KategoriApartemen} />
        <Route exact path='/tanah' component = {KategoriTanah} />
        <Route exact path='/detailitem' component = {DetailItem} />
        <Route exact path='/detailitem/:id' component = {DetailItem} />
        <Route exact path='/register' component = {Register} />
        <Route exact path='/login' component = {Login} />
        <Route exact path='/package' component = {Package} />
        <Route exact path='/profile' component = {Profile} />
        <Route exact path='/pasangiklan' component = {PasangIklan} />
        <Route exact path='/editiklan' component = {EditIklan} />
        <Route exact path='/editiklan/:id' component = {EditIklan} />
        <Route exact path='/cart' component = {Cart} />
        <Route exact path='/transaction' component = {Transaction} />
        <Route exact path='/searchpage' component = {SearchPage} />
        {/* <Route component = {NotMatch} /> */}
      </Switch>
    );
  }
}

export default MainRoute;
