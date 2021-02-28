
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ReactSlider from "../../sharedfiles/Slider";
import CatogarySlider from "../../sharedfiles/CatogarySlider";
import { Container, Row, Col, Breadcrumb, ButtonToolbar, ButtonGroup, Button,
    Spinner } from 'react-bootstrap';
import ProductDetailComponentStore from './ProductDetailComponentStore'
import ProductImgSlider from './ProductImgSlider';
import DropdownComponent from '../../sharedComponent/Dropdown/DropdownComponent'
import ImagesURLs from '../../sharedfiles/ImagesURLs'


const ProductDetailComponent = observer(
    class ProductDetailComponent extends React.Component {

        constructor(props) {
            super(props);

            this.pdstore = new ProductDetailComponentStore();
        }
        componentDidMount() {
            window.scrollTo(0, 0);
        }

        render() {
            const { appstore } = this.props;
            return (
                <React.Fragment>

                    <section>
                        <Container >
                            <div className="section-title bg-light">
                                <Row>
                                    <Col md={3}>
                                        <Breadcrumb>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                                Library
                        </Breadcrumb.Item>
                                            <Breadcrumb.Item active>Data</Breadcrumb.Item>
                                        </Breadcrumb>

                                    </Col>
                                </Row>
                            </div>

                            <div className="productDetailWrapper ta-left">

                                <Row>
                                    <Col md={4}>

                                        <ProductImgSlider
                                            {...{
                                                rimProps: {
                                                    isHintEnabled: true,
                                                    shouldHideHintAfterFirstActivation: false,
                                                    enlargedImagePosition: 'over'
                                                }
                                            }}
                                        />

                                    </Col>
                                    <Col md={4}>
                                        <div className="productDiscription  ">
                                            <br/>
                                            <h2 className="title">Title</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                        </div>

                                    </Col>
                                    <Col md={4}>
                                        <div className="addTocart">
                                            <h4 className="title">Sizes</h4>
                                            <ButtonToolbar aria-label="Toolbar with button groups">
                                                <ButtonGroup className="mr-2" aria-label="First group">
                                                    <Button variant="secondary">1/2 Kg</Button>
                                                </ButtonGroup>
                                                <ButtonGroup className="mr-2" aria-label="Second group">
                                                    <Button variant="secondary">1 Kg</Button>
                                                </ButtonGroup>
                                                <ButtonGroup aria-label="Third group">
                                                    <Button variant="secondary">2 Kg</Button>
                                                </ButtonGroup>
                                            </ButtonToolbar>

                                            <h4 className="mt-5 title ta-left" >Select quantity</h4>
                                            <div className="dropDownWrapper">
                                                <div className="customDrpDwn small">
                                                    <DropdownComponent dropDownOptions={this.pdstore.quatities}
                                                        store={this.pdstore}
                                                        callBack={(selectedOption) => this.pdstore.quantitySelected = selectedOption}
                                                        selectedOption={this.pdstore.quantitySelected} />
                                                </div>
                                            </div>

                                            

                                            <div className="addtoCartBtn mt-5">
                                                <div className="btn-wrapper">
                                                    <Button className="primary" 
                                                    onMouseDown={e => e.preventDefault()} 
                                                    disabled={this.pdstore.addedtoCartProcess} onClick={()=> this.pdstore.addTocart(appstore)}>
                                                        
                                              
                                                   Add to cart {'  '}
                                                {
                                                    this.pdstore.addedtoCartProcess && 
                                                        <Spinner
                                                            as="span"
                                                            animation="border"
                                                            size="sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                        />
                                                 }
                                               
                                                </Button>
                                                </div>

                                                <div className="btn-wrapper mr-3 ml-3">
                                                    <Button className=" primary"  disabled={this.pdstore.addedtoCartProcess}
                                                     onClick={()=> appstore.navigate("/cart")}
                                                    >
                                                    Go to cart {'  '}
                                                    
                                                    </Button>
                                                </div>  
                                            </div>    
                                        </div>

                                    </Col>
                                </Row>

                            </div>

                        </Container>
                    </section>

                    <section>
                        <Container fluid={true}>
                            <Container>
                               
                                <div className="section-title">
                                    <h2 className="title">Best Selling Bakery Products</h2>
                                    <div cassName="chef_hat_img">
                                        <img src={ImagesURLs.chef_hat.default}/>
                                    </div>
                                    </div>
                            </Container>
                            <ReactSlider
                                settings={{
                                    dots: false,
                                    infinite: true,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    autoplay: true,
                                    speed: 4000,
                                    autoplaySpeed: 2000,
                                    cssEase: "linear",
                                    responsive: this.pdstore.responsiveBreakPoints,

                                }}

                                cards={this.pdstore.cakeData}
                            />
                        </Container>
                    </section>

                </React.Fragment>
            )
        }
    }
)
export default ProductDetailComponent




