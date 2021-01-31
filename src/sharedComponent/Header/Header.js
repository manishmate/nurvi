
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
 import {FcSearch} from 'react-icons/fc';

const Header = observer(
    class Header extends React.Component {
    
      constructor(props) {
        super(props);

        this.headerStore = new HeaderStore();
      }
		componentDidMount(){
			
			
		}
    
   openSideNav = ()=> {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
   closeSideNav = ()=> {
      document.getElementById("mySidenav").style.width = "0";
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
                <div className="row actual-header w-100">
                     
                    <div className="col-4 col-sm-3 col-md-3 col-lg-3 align-self-center">
                        <div className="row align-items-center h-100">
                        <div className="col-2 col-md-2 d-lg-none">
                          <button type="button" id="sidebarCollapse" className="navbar-btn active" onClick={() => this.openSideNav()}>
                              <span style={{"fontSize":20,"cursor":"pointer"}} onclick="openNav()">&#9776;</span>
                         </button>
                        </div>
                       <div className="col-8 col-md-10 col-lg-7 logo_wrapper ml-2 mb-2">
                          <div className="brand-logo">
                            <img 
                                src={imageURLs.logoIcon.default}
                                width="30"
                                height="30"
                                className="Applogo d-inline-block align-top"
                                alt="Nurvi"
                                onClick={() => appstore.navigate("/")}
                            />
                          </div>
                      </div>
                         
                      </div>
                    </div>
                    
                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 ">
                        <div className="row align-items-center h-100 pr-3 pl-3 ">  
                          
                           <Form className="w-100">
                              <Form.Group className="m-0" controlId="formSearch">
                                <Form.Control type="search" placeholder=" Search product                                                            🔍" />
                              </Form.Group>

                              {/* <div className="btn-wrapper">
                                    <Button className="primary small"  type="submit">
                                       <IconContext.Provider value={{}}>
                                         <FcSearch />
                                      </IconContext.Provider>
                                    </Button>
                              </div> */}
                           </Form> 
                       </div>
                    </div>
                    <div className="col-2 col-sm-5 col-md-5 col-lg-5 ">
                      <div  className="row" >
                      <div className="col-6 col-sm-6 col-md-6 col-lg-6 d-none d-lg-flex">
                        <div className="menu-left  h-100">
                          <div className="row align-items-center h-100 ">
                              <div  className="menu-option" onClick={() => appstore.navigate("/")}>Home </div>
                              <div  className="menu-option" onClick={() => appstore.navigate("/aboutus")}>About Us </div>
                              <div  className="menu-option" onClick={() => appstore.navigate("/contactus")}>Contact Us </div>
                          
                          </div>
                        </div>
                      </div>

                      <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                      <div className="menu-left  h-100">
                           <div className="row align-items-center h-100">
                            { !this.props.appstore.loggedIn &&
                                <div className="ml-2 btn-wrapper d-none d-lg-flex" onClick={()=>appstore.navigate("/login")}>
                                        <Button className="mr-1 ml-1 primary small"  type="submit">
                                            Login
                                        </Button>
                                  </div>
                            
                            }
                            { this.props.appstore.loggedIn &&
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
                                  <img   src={imageURLs.addedcart.default}
                                      className=" "
                                        alt="cart"
                                    />
                                <span className="count">{appstore.cartCount}</span>
                              </div>
                            </div>
                            </div>
                            </div>
                            </div> 
                    </div> 
                   
                    {/* for mobile view sidebar  */}
                    <div id="mySidenav" className="sidenav d-lg-none">
                        <a  className="closebtn" onClick={() => this.closeSideNav()}>&times;</a>
    
                        <br/><br/>
                        { !this.props.appstore.loggedIn &&
                             <a> 
                               <div className="btn-wrapper" onClick={()=>appstore.navigate("/login")}>
                                        <Button className="mr-1 ml-1 primary small">
                                            Login
                                        </Button>
                                  </div>
                              </a>
                            }
                        <a  className="menu-option" onClick={() => appstore.navigate("/")}>Home</a>
                        <a  className="menu-option" onClick={() => appstore.navigate("/")}>About Us</a>
                        <a  className="menu-option" onClick={() => appstore.navigate("/")}>Contact Us</a>

                        
                    </div> 

                </div>
               
              {/* <TopbarLoader/> */}
              <div className="header-wave-separator"></div>
              </div>
            )
        }
    }
)
export default Header
	
    
    