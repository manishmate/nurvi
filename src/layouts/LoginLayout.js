import React from 'react';

import { observer } from 'mobx-react';
import { Button,Form } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { IconContext } from "react-icons";
import { GoogleLogin } from 'react-google-login';


const LoginLayout = observer(
  class LoginLayout extends React.Component {

    constructor(){
      super();
    
    }
    
     successResponseGoogle = (response) => {
        console.log(response);
        this.props.appstore.navigate("/home");
        this.props.appstore.menuChanged = "/home";
      } 
      
      failureResponseGoogle = (response) => {
        console.log(response);
      }    

    render(){

      return (
          
        <div className="loginWrapper">
		   <div class="loginForm">
                  <h2 className="loginTitle">
						Login
					</h2> 
            <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <span className="focus-forminput" data-symbol="&#xf206;"></span>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <span className="focus-forminput" data-symbol="&#xf190;"></span>
                    </Form.Group>
                    
                    <div className="ta-right mb-4">
						<a href="">
							Forgot password?
						</a>
					</div>

                    <div className="container-login100-form-btn">
						
							<div className="btn-wrapper big">
                            <Button className="primary "  type="submit">
                                 Login
                             </Button>
              </div>
					</div>

            </Form>
                    <div className="text-center mt-4">
						<span>
							Or Sign Up Using
						</span>
					</div>


                    <div className="text-center mt-4">

					 <a href="#" className="">
                       <div className="login-google-btn">
                            <IconContext.Provider value={{className: "social-icons google-icon" }}>
                              <FcGoogle />oogle sign in
                         </IconContext.Provider>
						</div>

                        <GoogleLogin
                            clientId="684879843846-qo8lpn19bg0r5fi9460ql6enl0vd140e.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.successResponseGoogle}
                            onFailure={this.failureResponseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />,
                        
					</a>

          <div className="">
                            <Button className=""  type="submit">
                                 Login
                             </Button>
						</div>

					</div>

		</div>
	
            
        </div>
      
      )
  }
}
  
)

export default LoginLayout;

