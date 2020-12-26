
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container, Row, Col, Form, FormControl,Button,
     } from 'react-bootstrap';
import CartComponentStore from './CartComponentStore'
import DropdownComponent from '../../sharedComponent/Dropdown/DropdownComponent'
import { AiOutlineMinusCircle,AiOutlinePlusCircle } from 'react-icons/ai';
import { IconContext } from "react-icons";

const CartComponent = observer(
    class CartComponent extends React.Component {

        constructor(props) {
            super(props);

            this.cartStore = new CartComponentStore();
        }
        componentDidMount() {
            window.scrollTo(0, 0);
        }

        render() {
            const { appstore } = this.props;
            return (
            
                    <section>
                        
                           { appstore.cartCount ==0 && 

                                    <Container >
                                        <div className="cartWrapper section-title bg-light">
                                        <div className="mb-5 cartWrapper-head">
                                            <h3 className="ta-left title ml-2">My Cart 
                                            
                                            </h3>
                                        </div> 
                                            <p> You have nothing in your cart. </p>
                                     </div>
                                     </Container>
                                        
                                        }

                            {
                                appstore.cartCount !=0 && 

                                <div>
                                  <Row>
                                    
                                    <Col md={8}>
                                    <Container >
                                        <div className="cartWrapper section-title bg-light">
                                        <div className="mb-5 cartWrapper-head">
                                            <h3 className="ta-left title ml-2">My Cart 
                                            
                                            </h3>
                                        </div>   

                                     {
                                         this.cartStore.totalCartProducts.map((product,index) => {
                                          return(
                                          <div className="cartProduct">
                                          <Row>
                                           <Col md={6}>
                                           
                                           <div className="">
                                             <div className=" mb-2 cartProduct-img">
                                               <img class="img-responsive" src={product.imgUrl}
                                               alt=""/>
                                             </div>
   
                                            <div className="quantity-handler">
                                               <Form inline>
                                               
                                                   <IconContext.Provider value={{className: "cartQuantity-icon-minus" }}>
                                                       <AiOutlineMinusCircle />
                                                   </IconContext.Provider>
           
                                                   <FormControl type="text" 
                                                         placeholder="" 
                                                         className=" quantityInput ml-sm-2 mr-sm-2" 
                                                         value={product.quantity}
                                                         />
   
                                                   <IconContext.Provider value={{className: "cartQuantity-icon-plus" }}>
                                                       <AiOutlinePlusCircle />
                                                   </IconContext.Provider>
                                                   
                                               </Form>
                                               
   
                                             </div> 
                                           </div>
                                           
                                           
                                         </Col>
                                         <Col md={6}>
                                           <div className="cart-product-detail">
                                               <div className="product-title-name">
                                                    <h5>{  product.title}</h5>
                                               </div>
                                               <div>
                                               <span> {product.wieght} </span>
                                               </div>
                                                <div>
                                                < span> {product.flavour} </span>
                                                </div>

                                                <div className="product-price">
                                                    <div>
                                                        <h6>
                                                        {product.offerPrice}
                                                        </h6>
                                                        <h6>
                                                        {product.actualPrice} 
                                                        </h6>
                                                    </div>
                                                </div>
                                           </div>
                                         
                                         
                                         </Col>
                                          
                                         

                                       </Row>
                                  </div>) 
                                   }) 
                                 }
                                  </div>

                          
                                    </Container>      
                                </Col>
                                  
                                <Col md={4}>
                                    <Container >
                                        <div className="cartWrapper section-title bg-light">
                                        <div className="mb-5 cartWrapper-head">
                                            <h3 className="ta-left title ml-2">Order Summary
                                            
                                            </h3>
                                        </div> 
                                           <div className="price-details-wrapper">
                                               <div className="product-title-name">
                                                    <h5 > Price Details</h5>
                                               </div>
                                               <div>
                                               <span> Price (3 Items) : 1200 Rs </span>
                                               </div>
                                                <div>
                                                < span> Delivery Charges : 50 Rs</span>
                                                </div>

                                                <div className="product-price-total">
                                                    <div>
                                                        <h6>
                                                          Total : 1250 Rs
                                                        </h6>
                                                       
                                                    </div>
                                                </div>
                                           </div>
                                          </div>
                                           </Container >
                                         </Col>

                               </Row>
                               </div>
                            }
                           
                    </section>


            )
        }
    }
)
export default CartComponent




