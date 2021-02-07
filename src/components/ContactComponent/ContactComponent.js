import React from 'react';

import { observer } from 'mobx-react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import ContactComponentStore from './ContactComponentStore';

import imageURLs from '../../sharedfiles/ImagesURLs';
import { BiTime } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { IconContext } from "react-icons";

const ContactComponent = observer(
  class ContactComponent extends React.Component {

    constructor() {
      super();
      this.contactStore = new ContactComponentStore();

    }



    render() {

      return (

        <React.Fragment>
          <section className=" section-with-bg-header">

            <div className="top-banner">
              <img className=" w-100" alt="" src="" />

              <div className="page-title-wrapper">
                <div className="banner-wrapper container">
                  <h1 className="heading__secondary title">Contact Us</h1>
                </div>
              </div>

            </div>

          </section>

          <section className="contact-us-wrapper">

            <div className="row p-5">
              <div className="col-12 col-sm-6 mb-3">


                <h4 className="heading__secondary title">Get in touch</h4>
                <div cassName="chef_hat_img">
                  <img src={imageURLs.chef_hat.default} />
                </div>
                <br /><br />

                <p>We are also active in social media.<br />
                  You can find us on below adresses..
                  </p>
                <br />
                <IconContext.Provider value={{ className: "time-icon" }}>
                  <MdLocationOn />
                </IconContext.Provider>
                <br /> <br />
                <p>

                  329 Queensberry Street, North Melbourne<br />
VIC 3051, Australia.
                  </p>

                <div class="wpb_wrapper">
                  <br />
                  <IconContext.Provider value={{ className: "time-icon" }}>
                    <BiTime />
                  </IconContext.Provider>
                  <br /> <br />

                  <p>Opening Hour <b>8:00 AM – 10:00 PM</b><br />
Monday – Sunday</p>
                  <p >Call. <strong><a href="tel:+00 123 456 789">+00 123 456 789</a></strong><br />
E-mail. <a href="mailto:hello@cakeart.com"><strong>hello@cakeart.com</strong></a></p>
                </div>
              </div>

              <div className="col-12 col-sm-6 mb-3">
                <h4 className="heading__secondary title">Send a Message</h4>
                <div cassName="chef_hat_img">
                  <img src={imageURLs.chef_hat.default} />
                </div>
                <br /><br />
                <p>Do you have anything in your mind to tell us?</p>
                <p>Please don’t hesitate to get in touch to us via our contact form.</p>
                <Row>
                  <Col>
                    <Form.Group controlId="formName">
                      <Form.Control name="fullname" type="name" placeholder="enter full name" onChange={this.handleValueChange} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formEmail">
                      <Form.Control name="email" type="email" placeholder="enter email" onChange={this.handleValueChange} />

                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group controlId="formSubject">
                      <Form.Control name="subject" type="name" placeholder="enter emal" onChange={this.handleValueChange} />

                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group controlId="formSubject">
                      <textarea width={100} placeholder={"  Type your message here"} onChange={this.handleChange} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <div className=" btn-wrapper big ml-3 mr-3 ">
                    <Button className="primary " type="submit">
                      Send Message
                  </Button>
                  </div>
                </Row>




              </div>

            </div>

          </section>
        </React.Fragment>


      )
    }
  }

)

export default ContactComponent;

