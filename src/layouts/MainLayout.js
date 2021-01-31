
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Header from '../sharedComponent/Header/Header';
import Footer from '../sharedComponent/Footer/Footer';
import HomePageLayout from './HomePageLayout';
import ProductDetailComponent from '../sharedComponent/ProductDetail/ProductDetailComponent';
import CartComponent from '../components/CartComponent/CartComponent';
import CakeComponent from '../components/CakeComponent/CakeComponent';
import AboutUsComponent from '../components/AboutUsComponent/AboutUsComponent';
import ContactComponent from '../components/ContactComponent/ContactComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const MainLayout = observer(
  class MainLayout extends React.Component {

    constructor(props) {
      super(props);

    }
    componentDidMount() {

    }

    render() {
      const { appstore } = this.props;
      return (
        <React.Fragment>
            <Header  appstore={appstore}/> 
           
            <Router>
           
            <Switch>
                
                <Route path="/" exact render={() =>
                    <HomePageLayout appstore={appstore} />
                }>
                </Route>
                
                <Route path="/productDetail/:type/:id" exact render={() =>
                                <ProductDetailComponent appstore={appstore} />
                }>
                </Route>
                
                <Route path="/cart" exact render={() =>
                                <CartComponent appstore={appstore} />
                }>
                </Route>

                <Route path="/cakes" exact render={() =>
                    <CakeComponent appstore={appstore} />
                }>
                </Route>

                <Route path="/aboutus" exact render={() =>
                           <AboutUsComponent appstore={appstore} />
                }></Route>

                <Route path="/contactus" exact render={() =>
                          <ContactComponent appstore={appstore} />
                }></Route>

                </Switch>
             
          </Router>
         
            <Footer  appstore={appstore}/> 
        </React.Fragment>
      )
    }
  }
)
export default MainLayout




