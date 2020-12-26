
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import CakeComponentStore from './CakeComponentStore'
import ImagesURLs from '../../sharedfiles/ImagesURLs'

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
                  <h2 className="title">Best Selling Bakery Product</h2>
                  <div cassName="chef_hat_img">
                    <img src={ImagesURLs.chef_hat.default}/>
                  </div>
                </div>
                </Container>
               
              <div className="wave-separator"></div>
            </section>

           

        </React.Fragment>
      )
    }
  }
)
export default CakeComponent




