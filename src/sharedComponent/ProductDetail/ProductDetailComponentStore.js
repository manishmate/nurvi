import { decorate, observable, action } from 'mobx';
import imageUrls from '../../sharedfiles/ImagesURLs';


class ProductDetailComponentStore {
	
  	constructor(){
      
     this.addedtoCartProcess = false;   
     this.quatities =[
      {"label":1,"value":1},
     {"label":2,"value":2},
     {"label":3,"value":3}
     ];

      this.quantitySelected = {"label":1,"value":1};

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
          },
          {  "imgUrl":imageUrls.catogary_1.default,
             "title":"Cakes",
          },
          {  "imgUrl":imageUrls.catogary_2.default,
             "title":"Pastry",
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


      addTocart=(appstore)=>{
        appstore.cartCount++;
        this.addedtoCartProcess=true;

        setTimeout(() => {
            this.addedtoCartProcess=false;
        }, 500);
      }
    

    }

    decorate(ProductDetailComponentStore, {
      
        quantitySelected:observable,
        addedtoCartProcess:observable,
    });


    export default ProductDetailComponentStore;