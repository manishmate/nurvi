import { decorate, observable, action } from 'mobx';
import imageUrls from '../sharedfiles/ImagesURLs';


class HomepageLayoutStore {
	
  	constructor(){
      
      this.mainsliderData =  [
        {  "imgUrl":imageUrls.s1.default,
           "title": "Bakery Products",
           
        },
        {  "imgUrl":imageUrls.s2.default,
           "title": "Bakery Products",
        },
        {  "imgUrl":imageUrls.s3.default,
           "title": "Bakery Products",
        },
      ]
      

      this.cakeData = 
        [
          {  "imgUrl":imageUrls.catogary_0.default,
             "title": "Bakery Products",
             "type" : "cake",
             "productId":1
          },
          {  "imgUrl":imageUrls.catogary_1.default,
             "title":"Cakes",
             "type" : "cake",
             "productId":2
          },
          {  "imgUrl":imageUrls.catogary_2.default,
             "title":"Pastry",
             "type" : "cake",
             "productId":3
          },
          {  "imgUrl":imageUrls.catogary_0.default,
             "title": "Bakery Products",
             "type" : "cake",
             "productId":4
          },
          {  "imgUrl":imageUrls.catogary_1.default,
             "title":"Cakes",
             "type" : "cake",
             "productId":5
          },
          {  "imgUrl":imageUrls.catogary_2.default,
             "title":"Pastry",
             "type" : "cake",
             "productId":6
          }
        ]
        

        this.catagoryData = 
        [
          {  "imgUrl":imageUrls.catogary_0.default,
             "title": "Bakery Products",
             "catogary_img":imageUrls.c_0.default,
          },
          {  "imgUrl":imageUrls.catogary_1.default,
             "title":"Cakes",
             "catogary_img":imageUrls.c_1.default,
          },
          {  "imgUrl":imageUrls.catogary_2.default,
             "title":"Pastry",
             "catogary_img":imageUrls.c_2.default,
          }
          
        ]

        this.responsiveBreakPoints =  [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

      }

       

    }

    decorate(HomepageLayoutStore, {
      
    });


    export default HomepageLayoutStore;