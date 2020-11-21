
import Slider from "react-slick";
import React,{Component} from 'react';
import { observer } from "mobx-react";
import CardComponent from '../sharedComponent/Card/Card';
import imageUrls from './ImagesURLs'
  const CatogarySlider = observer(
    class CatogarySlider extends React.Component {
		
		componentDidMount(){
			
			
		}
  render() {
    
    const {settings,data, cards} = this.props;
    const  image  = imageUrls.catogary_1;
    var style = { backgroundImage: 'url(' + imageUrls.catogary_1 + ')'};
    
    return (
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
               
                <div class="catogarySlider">
                 <article className="card product">

                  <div style={{backgroundImage: 'url(' + value.imgUrl+ ')'}} id={value.imgUrl} className="card-header">
                  <div className="card-overlay " >
                    <div className="card-overlay-title">{value.title}</div>
                  </div>
                  </div>
                 
              </article>
                </div>
             )
           })
          }

         </Slider>
      );
    }
  })

export default CatogarySlider