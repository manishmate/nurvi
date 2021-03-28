
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import AdminMainComponent from '../components/AdminComponent/AdminMainComponent';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

const AdminLayout = observer(
  class AdminLayout extends React.Component {

    constructor(props) {
      super(props);
     
    }
    componentDidMount() {
         
    }

    render() {
      const { appstore } = this.props;
      
      return (
        <React.Fragment>
           
            <Router>
           
            <Switch>
                <Route path="/admin" exact render={() =>
                     <AdminMainComponent appstore={appstore} />
                }>
                </Route>
                
               
                </Switch>
             
          </Router> 
        </React.Fragment>
      )
    }
  }
)
export default AdminLayout




