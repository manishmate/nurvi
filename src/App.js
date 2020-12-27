import React from 'react';
import './App.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { observer } from 'mobx-react';
import Appstore from './Appstore'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button,Form } from 'react-bootstrap';
import navigationStore from './sharedfiles/navigationStore';

import { Router } from 'react-router';
import { Route ,Switch} from 'react-router-dom';

import LoginLayout from './layouts/LoginLayout';
import MainLayout from './layouts/MainLayout';


const App = observer(
  class App extends React.Component {

    constructor(){
      super();
      this.appstore = new Appstore();
    }
    render(){
      return (
        <div className="App" key={this.appstore.menuChanged}>
           
          <Router  history={navigationStore.history}>
           
           <Switch>
             
           <Route path="/login" exact render={() =>
               <LoginLayout appstore={this.appstore} />
               }>
             </Route>

             <Route path="/"  render={() =>
               <MainLayout appstore={this.appstore} />
               }>
             </Route>
            
            </Switch>
             
          </Router>

        </div>
      
      )
  }
}
  
)

export default App;

