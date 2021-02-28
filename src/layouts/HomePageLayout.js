
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ReactSlider from "../sharedfiles/Slider";
import CatogarySlider from "../sharedfiles/CatogarySlider";
import { Container,Row,Col,Button } from 'react-bootstrap';
import HomepageLayoutStore from './HomepageLayoutStore';
import ImagesURLs from '../sharedfiles/ImagesURLs';

const HomePageLayout = observer(
  class HomePageLayout extends React.Component {

    constructor(props) {
      super(props);

      this.homepageLayoutStore = new HomepageLayoutStore();
    }
    componentDidMount() {

    }

    render() {
      const { appstore } = this.props;
      return (
        <React.Fragment>

          <section className="mainSlider-section">
            
              <div className="homeSlider">

                <ReactSlider
                  settings={{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }}

                  data={this.homepageLayoutStore.mainsliderData}
                />

              </div>
             
          </section>
          <section >
            <Container>
              <div className="section-title ">
                <h2 className="primary-title grand-title p-t-allign">Catogaries</h2>
                <div cassName="chef_hat_img">
                    <img src={ImagesURLs.chef_hat.default}/>
                  </div>
              </div>
              <br/>
              {/* https://source.unsplash.com/user/erondu/600x400 */}
              <Row className="catogoryRow">
                { this.homepageLayoutStore.catagoryData.map((data,index)=> {
                return (
                    <Col md={4}>
                      <div class="catogoryCard about-left"  onClick={()=> appstore.navigate("/cakes")}>
                      <figure class="effect-bubba">
                       
                        <img class="img-responsive" src={data.catogary_img} alt="" />
                        <figcaption>
                          <h2 class="primary-title">{data.title}</h2>
                          <p>In sit amet sapien eros Integer dolore magna aliqua</p>
                        </figcaption>
                      </figure>
                    </div></Col>
                )}) 
                
                }
              </Row>

             </Container>
          </section>
          <section>
              <Container fluid={true} >
                <Container>
                <div className="section-title">
                  <h2 className="title">Best Selling Cakes</h2>
                  <div cassName="chef_hat_img">
                    <img src={ImagesURLs.chef_hat.default}/>
                  </div>
                </div>
                </Container>
                <ReactSlider
                  settings={{
                    dots: true,
                    infinite: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    speed: 1000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                    responsive: this.homepageLayoutStore.responsiveBreakPoints
                  }}
                  
                  cards={this.homepageLayoutStore.cakeData}
                />
              </Container>
            </section>
           
            <section className=" section-with-bg">
                <div className="section-with-bg-content">
                   <h2 className="title" >Need any help ?</h2>
                   <div className="ml-2 my-2 btn-wrapper">
                            <Button className="mr-1 ml-1 primary small"  type="submit">
                                 Contact Us
                             </Button>
                      </div>
                </div>
               
            </section>

            <section>
              <Container className="" fluid={true}>
              <Container>
                <div className="section-title ">
                  <h2 className="title">Best Selling Bakery Product</h2>
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
                    responsive: this.homepageLayoutStore.responsiveBreakPoints,

                  }}

                  cards={this.homepageLayoutStore.cakeData}
                />
              </Container>
             
            </section>

           

        </React.Fragment>
      )
    }
  }
)
export default HomePageLayout




