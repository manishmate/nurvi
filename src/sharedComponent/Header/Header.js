
import React,{Component} from 'react';

import { observer } from "mobx-react";
import axios from 'axios';
import {Navbar, Button,NavDropdown,Nav,Form,FormControl,Container,Row,Col} from 'react-bootstrap';
import imageURLs from '../../sharedfiles/ImagesURLs';
import {
  Link
} from "react-router-dom";

import DropdownComponent from '../../sharedComponent/Dropdown/DropdownComponent'
import HeaderStore from './HeaderStore';
 import TopbarLoader from '../../sharedfiles/TopbarLoader';
 import { IconContext } from "react-icons";
 import { IoIosCall } from 'react-icons/io';
 import {BiTime } from 'react-icons/bi';
 import {AiFillFacebook, AiFillInstagram , AiFillYoutube} from 'react-icons/ai';

const Header = observer(
    class Header extends React.Component {
    
      constructor(props) {
        super(props);

        this.headerStore = new HeaderStore();
      }
		componentDidMount(){
			
			
		}
		
        render() {
        
            const {appstore} = this.props;
            return(
              <div className="headerContainer">
                <div className="top-head">
                  <div className="top-head-icon">
                    <div className="left-top-head floatLeft ml-5">
                        <IconContext.Provider value={{className: "call-icon" }}>
                                      <IoIosCall /> +919326862769
                          </IconContext.Provider>
                          <IconContext.Provider value={{className: "time-icon" }}>
                                      <BiTime /> Mon - Sat: 8AM - 5PM
                          </IconContext.Provider>
                      </div>

                      <div className="right-top-head floatRight">
                          <IconContext.Provider value={{}}>
                                      <AiFillFacebook />
                          </IconContext.Provider>
                          <IconContext.Provider value={{}}>
                                      <AiFillInstagram />
                          </IconContext.Provider>
                          <IconContext.Provider value={{ }}>
                                      <AiFillYoutube />
                          </IconContext.Provider>
                      </div>
                  </div>

                </div>
                
                <Navbar bg="light" expand="lg">
                <Navbar.Brand>

                    <img 
                        src={imageURLs.logoIcon.default}
                        width="30"
                        height="30"
                        className="Applogo d-inline-block align-top"
                        alt="Nurvi"
                        onClick={() => appstore.navigate("/")}
                    />
                   
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link  onClick={() => appstore.navigate("/")}>Home</Nav.Link>
                    <Nav.Link >Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <div className="btn-wrapper">
                            <Button className="primary small"  type="submit">
                                 Search
                             </Button>
                      </div>
                    
                  </Form>
                  <Link to="/login">
                    
                     <div className="ml-2 btn-wrapper">
                            <Button className="mr-1 ml-1 primary small"  type="submit">
                                 Login
                             </Button>
                      </div>
                  </Link>
             {this.props.appstore.loggedIn &&
                  <div className="ml-2 dropDownWrapper">
                        <div className="customDrpDwn small">
                            <DropdownComponent dropDownOptions={this.headerStore.userProfileOption}
                                store={this.headerStore}
                                callBack={(selectedOption) => this.headerStore.selectedUserOption = selectedOption}
                                selectedOption={this.headerStore.selectedUserOption} />
                        </div>
                   </div>
                  }
                  <div className="m-4 addtoCartIcon">
                   <img 
                        src={imageURLs.addedcart.default}
                      
                        className=" "
                        alt="cart"
                    />
                    <span className="count">{appstore.cartCount}</span>
                  </div>
                </Navbar.Collapse>
              </Navbar>
              {/* <TopbarLoader/> */}
              <div className="header-wave-separator"></div>
              </div>
            )
        }
    }
)
export default Header
	
    
    