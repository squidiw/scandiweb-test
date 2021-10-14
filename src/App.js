import React, { Component } from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";

import ProductPage from "./pages/product-page/product-page.component";
import ProductDetailPage from "./pages/product-detail-page/product-detail.component";
import CheckoutPage from './pages/checkout-page/checkout-page.component';
export default class App extends Component {
   render() {
      return (
         <div className='body'>
               <Navbar />

               <Switch>
                  <Route exact path='/checkout' component={CheckoutPage}/>
                  <Route exact path="/:category" component={ProductPage} />
                  <Route
                     path="/:category/:id"
                     component={ProductDetailPage}
                  />
                  <Redirect to="/clothes" />
               </Switch>
               
         </div>
      );
   }
}
