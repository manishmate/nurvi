
import Slider from "react-slick";
import React,{Component} from 'react';
import { observer } from "mobx-react";
import CardComponent from '../sharedComponent/Card/Card';
import {
  Link
} from "react-router-dom";

  const ReactSlider = observer(
    class ReactSlider extends React.Component {
		
		componentDidMount(){
			
			
		}
  render() {
    
    const {settings,data, cards , needBtn} = this.props;
   
    return (

     <div className="slider-wrapper">
      <Slider {...settings}>
         {  
          data &&  
            data.map((value,index)=>{
              return (
               
              <div>
                    <img 
                        src={value.imgUrl}
                      
                        alt={value.title}
                    />
              </div>
             )
           })
          }
           
           {
            cards &&
            cards.map((value,index)=>{
              return (
                <div> 
                  <Link to={"/productDetail/"+value.type+"/"+value.productId}>  
                    <CardComponent data = {value} imgUrl={value.imgUrl} needButton = {needBtn} />
                  </Link>   
                </div>
             )
           })
          }

         </Slider>
         </div> 
      );
    }
  })

export default ReactSlider