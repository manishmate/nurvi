import React from 'react';

import { observer } from 'mobx-react';
import { Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import AddProductStore from './AddProductStore';
import DropdownComponent from '../../sharedComponent/Dropdown/DropdownComponent';

const AddProductComponent = observer(
  class AddProductComponent extends React.Component {

    constructor() {
      super();
      this.addproductStore = new AddProductStore();
    }
    render() {
      const appstore = this.props.appstore;
      return (
        <React.Fragment>
          <section className="admin-section-wrapper">
           <div className="main-wrapper-div">
           <div className="catogary-wrapper mb-5">
            <div class="admin-heading-div ta-left pb-3 mb-3">
              <h3>Add Category</h3>
            </div>
            <Row>
           
              <Col md={4}>
              <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" placeholder="Enter category name" />
              </Form.Group>
              </Form.Row>
              </Form>
              </Col>

            </Row>

            <Row>
               <div className="admin-page-btn">
                <div className="ml-2 btn-wrapper d-lg-flex">
                          <Button className="mr-1 ml-1 primary small" type="submit">
                            Add
                          </Button>
                        </div>
               </div>
             </Row>

            </div> 

          
            <div className="add-product-wrapper mb-5">
            <div class="admin-heading-div ta-left pb-3 mb-3">
              <h3>Add Product</h3>
            </div>
            <Row>
            
            <Col md={4}>
            
            <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Category</Form.Label>
                <div className="dropDownWrapper">
                    <div className="customDrpDwn">
                        <DropdownComponent dropDownOptions={this.addproductStore.allCategory}
                            store={this.addproductStore}
                            callBack={(selectedOption) => this.addproductStore.categorySelected = selectedOption}
                            selectedOption={this.addproductStore.categorySelected} />
                    </div>
                </div>
              </Form.Group>
              </Form.Row>
              </Form>
          </Col>
             
              <Col md={4}>
            
            <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Product name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" />
              </Form.Group>
              </Form.Row>
              </Form>
          </Col>
             
            </Row>

            <Row>
            <Col md={4}>
            
            <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Description</Form.Label><br/>
                   <textarea placeholder="Enter product description">
                   
                  </textarea>
              </Form.Group>
              </Form.Row>
              </Form>
          </Col>
             
              <Col md={4}>
            
                <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Upload Image</Form.Label>
									    <Col>
										    <div className="image_upload">
										    	<Button variant="light" className="cursor-pointer">
										    		<p>Upload</p>
										    		<input type = "file"/>
										    	</Button>
										    	</div>
										 
									    </Col>
									  </Form.Group>
                  </Form.Row>
                  </Form>
              </Col>
              
            </Row>
             <Row>
               <div className="admin-page-btn">
                <div className="ml-2 btn-wrapper d-lg-flex">
                          <Button className="mr-1 ml-1 primary small" type="submit">
                            Add
                          </Button>
                        </div>
               </div>
             </Row>
            </div> 
            <div className="add-product-wrapper mb-5">
            <div class="admin-heading-div ta-left pb-3 mb-3">
              <h3>Add Products Details</h3>
            </div>
            <Row>
            
            <Col md={4}>
            
            <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Product</Form.Label>
                <div className="dropDownWrapper">
                    <div className="customDrpDwn">
                        <DropdownComponent dropDownOptions={this.addproductStore.allproducts}
                            store={this.addproductStore}
                            callBack={(selectedOption) => this.addproductStore.productSelected = selectedOption}
                            selectedOption={this.addproductStore.productSelected} />
                    </div>
                </div>
              </Form.Group>
              </Form.Row>
              </Form>
          </Col>
             
              <Col md={4}>
            
            <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="text" placeholder="Enter weigth" />
              </Form.Group>
              </Form.Row>
              </Form>
          </Col>
             
            </Row>

            <Row>
            <Col md={4}>
            
            <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>No of quantity available</Form.Label>
                <Form.Control type="text" placeholder="Enter quantity available" />
              </Form.Group>
              </Form.Row>
              </Form>
          </Col>
             
              <Col md={4}>
            
                <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Price per quantity</Form.Label>
                    <Form.Control type="text" placeholder="Enter price per quantity" />
                  </Form.Group>
                  </Form.Row>
                  </Form>
              </Col>
              
            </Row>
            
            <Row>
               <div className="admin-page-btn">
                <div className="ml-2 btn-wrapper d-lg-flex">
                          <Button className="mr-1 ml-1 primary small" type="submit">
                            Add
                          </Button>
                        </div>
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

export default AddProductComponent;

