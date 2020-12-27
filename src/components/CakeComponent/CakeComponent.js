
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import CakeComponentStore from './CakeComponentStore'
import ImagesURLs from '../../sharedfiles/ImagesURLs'
import CardComponent from '../../sharedComponent/Card/Card';
import {
  Link
} from "react-router-dom";


const CakeComponent = observer(
  class CakeComponent extends React.Component {

    constructor(props) {
      super(props);

      this.cakeComponentStore = new CakeComponentStore();
    }
    componentDidMount() {

    }

    render() {
      const { appstore } = this.props;
      return (
        <React.Fragment>

            <section>
              <Container>
                <div className="section-title ">
                  <h2 className="title">Cakes</h2>
                  <div cassName="chef_hat_img">
                    <img src={ImagesURLs.chef_hat.default}/>
                  </div>
                </div>

                <div className="product-items row">
                
                  
                      {
                        this.cakeComponentStore.items.map((value,index)=>{
                          return (
                            <div  className="each-item m-4"> 
                          
                              <Link to={"/productDetail/"+value.type+"/"+value.productId}>  
                                <CardComponent data = {value} imgUrl={value.imgUrl} needButton = {true} />
                              </Link>
                                
                            </div>
                        )
                      })
                      }
               
                </div>
                </Container>
              </section>
          </React.Fragment>
      )
    }
  }
)
export default CakeComponent




