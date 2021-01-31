import React from 'react';

import { observer } from 'mobx-react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import ContactComponentStore from './ContactComponentStore';


const ContactComponent = observer(
  class ContactComponent extends React.Component {

    constructor() {
      super();
      this.contactStore = new ContactComponentStore();

    }

   

    render() {

      return (
       <section>
            <div className="row">
            <div className="top-banner">
                <img className=" w-100" alt="" src="https://z6z7q2p8.stackpathcdn.com/wp-content/themes/cakeart//images/bg_header.jpg"/>
                    
                <div class="page-title-wrapper">
                <div class="banner-wrapper container">
                <h1 class="heading__secondary title">About Us</h1> </div>
                </div>
                
            </div>

            </div>
        </section>
      
      )
  }
}
  
)

export default ContactComponent;

