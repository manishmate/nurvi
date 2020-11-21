import { Button,Form } from 'react-bootstrap';
import React,{Component} from 'react';

import { observer } from "mobx-react";
import {Navbar, NavbarBrand,Container,Row,Col} from 'react-bootstrap';
import imageURLs from '../../sharedfiles/ImagesURLs';

const Footer = observer(
    class Footer extends React.Component {
		
		componentDidMount(){
			
			
		}
		
        render() {
            const {appstore} = this.props;
            return(
                <div className="appfooter">  
                    
                    <Navbar color="dark" dark>
                        <Container>
                            {/* <NavbarBrand>Footer</NavbarBrand> */}
                            <Row>
                                <Col md="4">
                                <div className="socialmedia">
                                    <h3>Follow Us</h3>
                                    <ul className="socialIcon">
                                        <li><a href="#"><h6><span class="fb"><img src={imageURLs.fb}></img></span> Facebook</h6></a></li>
                                        <li><a href="#"><h6> <span class="twit"><img src={imageURLs.twitter}></img></span>Twitter</h6></a></li>
                                        <li><a href="#"><h6> <span class="insta"><img src={imageURLs.insta}></img></span> Instagram</h6></a></li>
                                        <li><a href="#"><h6> <span class="youtube"><img src={imageURLs.youtube}></img></span> Youtube</h6></a></li>
                                    </ul>
                                </div>
                                </Col>
                                <Col col="md-4">
                                <div class="">
                                    <h3>Store Information</h3>
                                    <h4>The company name,
                                        <span>Lorem ipsum dolor,</span>
                                        Glasglow Dr 40 Fe 72.</h4>
                                    <h5>+955 123 4567</h5>	
                                    <p><a href="mailto:example@email.com">contact@example.com</a></p>
                                </div>
                                </Col>
                                <Col col="md-4">
                                <div class="">
                                    <h3>Store Information</h3>
                                    <h4>The company name,
                                        <span>Lorem ipsum dolor,</span>
                                        Glasglow Dr 40 Fe 72.</h4>
                                    <h5>+955 123 4567</h5>	
                                    <p><a href="mailto:example@email.com">contact@example.com</a></p>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                    </Navbar>
               </div>
        
            )
        }
    }
)


export default Footer