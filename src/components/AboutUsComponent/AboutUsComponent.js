import React from 'react';

import { observer } from 'mobx-react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import AboutUsComponentStore from './AboutUsComponentStore';
import imageURLs from '../../sharedfiles/ImagesURLs';

const AboutUsComponent = observer(
  class AboutUsComponent extends React.Component {

    constructor() {
      super();
      this.aboutStore = new AboutUsComponentStore();

    }



    render() {

      return (

        <React.Fragment>
          <section className=" section-with-bg-header">

            <div className="top-banner">
              <img className=" w-100" alt="" src="" />

              <div className="page-title-wrapper">
                <div className="banner-wrapper container">
                  <h1 className="heading__secondary title">About Us</h1>
                </div>
              </div>

            </div>

          </section>
          <section className="article-section">

            <div className="container p-5">
              <div className="row">
                <div className="col-sm-6 mb-2">
                  <div className="chef-avatar">
                    <img src={imageURLs.chef_avatar.default} className="vc_single_image-img attachment-full w-100" alt="" />
                   
                  </div>
                </div>



                <div className="col-sm-6 ta-left mb-2">
                  <div className="aboutus-content">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’.</p>
                    <p><strong>“ Nullam et lorem magna, in consectetur erat. Aliquam fermentum fringilla libero a vulputate. Curabitur non arcu non tortor semper dictum. ”</strong></p>

                  </div>

                </div>
              </div>
            </div>


          </section>

          <section className=" section-with-bg-header">

            <div className="top-banner">

              <div className="page-title-wrapper">
                <div className="banner-wrapper container">

                  <div className="row">
                    <div className="col-3">
                      <div className="circle_wrapper">
                        <div className="circle ">
                          <div className="content">
                            <div className="number"><span className="counter-up" data-number="10">10</span></div>
                            <div className="text">className</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="circle_wrapper">
                        <div className="circle ">
                          <div className="content">
                            <div className="number"><span className="counter-up" data-number="10">40</span></div>
                            <div className="text">staffs</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="circle_wrapper">
                        <div className="circle ">
                          <div className="content">
                            <div className="number"><span className="counter-up" data-number="10">10</span></div>
                            <div className="text">master</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="circle_wrapper">
                        <div className="circle ">
                          <div className="content">
                            <div className="number"><span className="counter-up" data-number="10">5</span></div>
                            <div className="text">kitchen</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </section>

          <section>
            <div className="container">

              <h1 className="heading__secondary title">Our Team</h1>
              <div cassName="chef_hat_img">
                <img src={imageURLs.chef_hat.default} />
              </div>
              <br /><br />

              <div className="row">

                <div className="col-6 col-sm-3">

                  <div className="about-staff-conatiner">
                    <img src={imageURLs.staff1.default} alt="Avatar" className="image" />
                    <div className="avatar_name">John Wick</div>
                    <div className="avatar_overlay">Owner</div>
                  </div>
                </div>

                <div className="col-6 col-sm-3">

                  <div className="about-staff-conatiner">
                    <img src={imageURLs.staff1.default} alt="Avatar" className="image" />
                    <div className="avatar_name">John Wick</div>
                    <div className="avatar_overlay">Owner</div>
                  </div>
                </div>

                <div className="col-6 col-sm-3">

                  <div className="about-staff-conatiner">
                    <img src={imageURLs.staff1.default} alt="Avatar" className="image" />
                    <div className="avatar_name">John Wick</div>
                    <div className="avatar_overlay">Owner</div>
                  </div>
                </div>

                <div className="col-6 col-sm-3">

                  <div className="about-staff-conatiner">
                    <img src={imageURLs.staff1.default} alt="Avatar" className="image" />
                    <div className="avatar_name">John Wick</div>
                    <div className="avatar_overlay">Owner</div>
                  </div>
                </div>
              </div>
            </div>


          </section>
          <section>

            <div className="container p-5 about-us-core-values">
              <div className="row">

                <div className="col-12 col-sm-5 left-side">
                  <div className="row mb-5">
                    <div className="col-12">
                      <div className="value-content-wrapper">
                        <h3>1. People over friendly's</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row mb-5">
                    <div className="col-12">
                      <div className="value-content-wrapper">
                        <h3>2. Never serve food that has expired.</h3>
                        <p>

                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
</p>
                      </div>
                    </div>
                  </div>

                </div>
             
                <div className="col-12 col-sm-2 d-none d-sm-block">
                  <div className="separator_wrapper">
                    <div className="separator ">
                      <div className="center_line_circle"></div>
                      <div className=" center_line"></div>
                      <div className="center_line_circle"></div>
                    </div>
                  </div>

                </div>


                <div className="col-12 col-sm-5 right-side">
                  <div className="row mb-5">
                    <div className="col-12 ta-left">
                      <div className="value-content-wrapper">
                        <h3 >3. Keep the restaurant spotless.</h3>
                        <p >

                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
</p>
                      </div>
                    </div>
                  </div>
                 
                  <div className="row mb-5">
                    <div className="col-12">
                      <div className="value-content-wrapper">
                        <h3>4. Make deliberate choices with lighting.</h3>
                        <p >  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.

</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

        </React.Fragment>

      )
    }
  }

)

export default AboutUsComponent;

