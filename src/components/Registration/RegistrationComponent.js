import React from 'react';

import { observer } from 'mobx-react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import RegistrationStore from './RegistrationStore';


const RegistrationComponent = observer(
  class RegistrationComponent extends React.Component {

    constructor() {
      super();
      this.registrationStore = new RegistrationStore();

    }

    successResponseGoogle = (response) => {
      console.log(response);
      this.props.appstore.loggedIn = true;
      this.props.appstore.navigate("/");
      this.props.appstore.menuChanged = "/";
    }

    failureResponseGoogle = (response) => {
      console.log(response);
    }
    

    handleValueChange = (event)=> {
     
        this.registrationStore.registrationFormData[event.target.name] = event.target.value;
    }

    handleRegistrationSubmit =()=>{
      alert(JSON.stringify(this.registrationStore.registrationFormData));
    }

    render() {

      return (

        <div className="loginWrapper">
          <div class="loginForm">
            <h2 className="loginTitle mb-5">
              Registration
					</h2>

            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formfirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" type="name" placeholder="enter first name" onChange={this.handleValueChange}/>
                    <span className="focus-forminput" data-symbol="&#xf206;"></span>

                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formlastName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="lastName" type="name" placeholder="enter last name" onChange={this.handleValueChange}/>
                    <span className="focus-forminput" data-symbol="&#xf206;"></span>

                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="enter email" onChange={this.handleValueChange}/>
                    <span className="focus-forminput" data-symbol="&#x26DD;"></span>
                   
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name="phoneNumber" type="" placeholder="enter phone number" onChange={this.handleValueChange}/>
                    <span className="focus-forminput" data-symbol="&#x260F;"></span>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formPass1">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control name="pass1" type="password" placeholder="enter password" onChange={this.handleValueChange}/>
                    <span className="focus-forminput" data-symbol="&#xf190;"></span>
                    
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formPass2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="pass2" type="password" placeholder="enter password" onChange={this.handleValueChange}/>
                    <span className="focus-forminput" data-symbol="&#xf190;"></span>
                  </Form.Group>
                </Col>
              </Row>
              
              <div className="mt-5 container-login100-form-btn">

                <div className="btn-wrapper big">
                  <Button className="primary " onClick ={()=>this.handleRegistrationSubmit()}>
                    Register
                             </Button>
                </div>
              </div>
           </Form>
            
          </div>

        </div>
	
      
      )
  }
}
  
)

export default RegistrationComponent;

