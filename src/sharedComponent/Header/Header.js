
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
              <div class="headerContainer">
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img 
                        src={imageURLs.logoIcon.default}
                        width="30"
                        height="30"
                        className="Applogo d-inline-block align-top"
                        alt="Nurvi"
                    />
                   
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#"><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link href="#"><Link to="/">Link</Link></Nav.Link>
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
                    
                     <div className="btn-wrapper">
                            <Button className="mr-1 ml-1 primary small"  type="submit">
                                 Login
                             </Button>
                      </div>
                  </Link>
                  <div className="dropDownWrapper">
                        <div className="customDrpDwn small">
                            <DropdownComponent dropDownOptions={this.headerStore.userProfileOption}
                                store={this.headerStore}
                                callBack={(selectedOption) => this.headerStore.selectedUserOption = selectedOption}
                                selectedOption={this.headerStore.selectedUserOption} />
                        </div>
                   </div>

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
              
              </div>
            )
        }
    }
)
export default Header
	
    
    