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
              <img className=" w-100" alt="" src=""/>
                  
              <div className="page-title-wrapper">
              <div className="banner-wrapper container">
              <h1 className="heading__secondary title">About Us</h1>
                </div>
              </div>
              
          </div>
       
       </section> 
        <section className="article-section">
        
         <div className="container">
          <div className="row">
             <div className="col-sm-6">
                <div className="chef-avatar">
                <img src={imageURLs.chef_avatar.default} className="vc_single_image-img attachment-full" alt="" srcset="https://z6z7q2p8.stackpathcdn.com/wp-content/uploads/2015/07/chef.jpg 722w, https://z6z7q2p8.stackpathcdn.com/wp-content/uploads/2015/07/chef-300x220.jpg 300w" sizes="(max-width: 550px) 100vw, 550px" width="550" height="429"/>
                </div>
             </div>
             

               
             <div className="col-sm-6 ta-left">
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
       <div className="staff-profile-container">
          <img src="img_avatar.png" alt="Avatar" className="image"/>
          <div className="overlay">My Name is John</div>
        </div>
        </div>
       </section>
        
    </React.Fragment>	
      
      )
  }
}
  
)

export default AboutUsComponent;

