import { Button,Form } from 'react-bootstrap';
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
            const {imgUrl}=this.props;
            return (
             
                <article className="standardCard card product">
                  <header style={{backgroundImage: 'url(' + imgUrl+ ')'}} id={image} className="card-header">
                  </header>
                    <div className="card-body product-bottom">
                    <h3>Cakes</h3>
                      <p>Explore Now</p>
                      <h4><a class="item_add" href="#"><i></i></a> <span class=" item_price">₹ 329</span></h4>
                      
                      
                    </div>
                    <div class="srch">
                      <span>50% OFF</span>
                    </div>
                </article>
        
            )
          }
    }
)


export default CardComponent