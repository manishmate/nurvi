import { Button, Form } from 'react-bootstrap';
import React, { Component } from 'react';

import { observer } from "mobx-react";
import { Navbar, NavbarBrand, Container, Row, Col } from 'react-bootstrap';
import imageURLs from '../../sharedfiles/ImagesURLs';
import { IconContext } from "react-icons";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = observer(
    class Footer extends React.Component {

        componentDidMount() {


        }

        render() {
            const { appstore } = this.props;
            return (
                <div className="appfooter ta-left">
                    <div className="wave-separator"></div>
                    <Container>
                        {/* <NavbarBrand>Footer</NavbarBrand> */}
                        <Row className="footer-content">

                            <Col col="md-4">
                                <div className="">
                                    <h3 className="title">About Us</h3>

                                    <p>Cakeryshop theme is a versatile and beautiful WordPress theme. This theme is specially designed for Bakery related items such as Cakes, Brownies, Biscuits etc. It comes with auto demo import features and powerful theme options panel.</p>
                                </div>
                            </Col>
                            <Col col="md-4">
                                <div className="">
                                    <h3 className="title">Work Timings</h3>
                                    <p>Our work timings are:</p>
                                    <ul>
                                        <li>
                                            Monday - Friday: 8AM - 8PM
                                        </li>
                                        <li>
                                            Saturday: 9AM - 4PM
                                        </li>
                                        <li>
                                            Sunday: closed
                                        </li>
                                    </ul>

                                </div>

                            </Col>

                            <Col col="md-4">
                                <div className="">
                                    <h3 className="title">Peace of Mind</h3>
                                    <p>We offer 100% money back guarantee. If you are unsatisfied with your purchase, we will refund your 100% of the money. No questions asked! So stop waiting and order today :-) </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="p-3 ">
                            <Col col="md-6">
                                <div className="footer-social-icon ">



                                    <div className="zigzag-circle-bg clipped">
                                    <IconContext.Provider value={{ className: "insta-icon" }}>
                                            <AiFillInstagram />
                                        </IconContext.Provider>
                                    </div>
                                    <div className="zigzag-circle-bg clipped">
                                    <IconContext.Provider value={{ className: "fb-icon" }}>
                                            <AiFillFacebook />
                                        </IconContext.Provider>
                                    </div>
                                    <div className="zigzag-circle-bg clipped">
                                       
                                        <IconContext.Provider value={{ className: "youtube-icon" }}>
                                            <AiFillYoutube />
                                        </IconContext.Provider>
                                    </div>
                                </div>

                            </Col>

                            <Col col="md-6 ">
                                <div className="footer-copyright-content floatRight">Copyright © Nurvi 2020 </div>
                                
                            </Col>

                        </Row>
                    </Container>

                </div>

            )
        }
    }
)


export default Footer