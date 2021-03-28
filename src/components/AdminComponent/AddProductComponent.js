import React from 'react';

import { observer } from 'mobx-react';
import { Button,Form } from 'react-bootstrap';
import Header from '../../sharedComponent/Header/Header';
import Footer from '../../sharedComponent/Footer/Footer';


const AddProductComponent = observer(
  class AddProductComponent extends React.Component {

    constructor(){
      super();
     
    }
    render(){
      const appstore = this.props.appstore;
      return (
       <React.Fragment>
         <section className=" section-with-bg-header">
            <Row>
               <Col>
                  
               </Col>
            </Row>
          </section>

       </React.Fragment>
      
      )
  }
}
  
)

export default AddProductComponent;

