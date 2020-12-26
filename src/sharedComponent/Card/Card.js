import { Button } from 'react-bootstrap';
import React,{Component} from 'react';

import { observer } from "mobx-react";
import imageURLs from '../../sharedfiles/ImagesURLs';

const CardComponent = observer(
    class Card extends React.Component {
		
		componentDidMount(){
			
			
		}
		
        render() {

            const  image  = 'https://source.unsplash.com/user/erondu/600x400';
            var style = { 
                backgroundImage: 'url(' + image + ')',
            };
            const {imgUrl,needButton}=this.props;
            return (
             
                <article className="standardCard card product">
                  <header style={{backgroundImage: 'url(' + imgUrl+ ')'}} id={image} className="card-header">
                  </header>
                    <div className="card-body product-bottom">
                    <h3>Cakes</h3>
                      <p>Explore Now</p>
                      <h4><a className="item_add" href="#"><i></i></a> <span className=" item_price">₹ 329</span></h4>
                      
                      <div className="ml-2 btn-wrapper floatRight">
                            <Button className="mr-1 ml-1 primary small"  type="submit">
                                 View
                             </Button>
                      </div>
                    </div>
                    <div className="srch">
                      <span>50% OFF</span>
                    </div>

                    <div className="srch">
                      <span>50% OFF</span>
                    </div>

                     

                </article>
        
            )
          }
    }
)


export default CardComponent