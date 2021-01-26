import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';
import imageUrls from '../../sharedfiles/ImagesURLs';


class CartComponentStore {
	
  	constructor(){
      
   
      this.quatities =[
         {"label":1,"value":1},
        {"label":2,"value":2},
        {"label":3,"value":3}
        ];
   
      this.quantitySelected = {"label":1,"value":1};

      this.totalCartProducts =  [
        {  "imgUrl":imageUrls.s1.default,
           "title": "Bakery Products",
           "actualPrice":"500 Rs",
           "offerPrice":"400 Rs",
           "quantity": 2,
           "wieght":"1 KG",
           "flavour":"Pink",
           "productId":22,
           "catogaryType":"cake",

        },
        {  "imgUrl":imageUrls.s2.default,
           "title": "Bakery Products",
           "actualPrice":"500 Rs",
           "offerPrice":"400 Rs",
           "quantity": 1,
           "wieght":"1 KG",
           "flavour":"Pink",
           "productId":22,
           "catogaryType":"cake",

        },
        {  "imgUrl":imageUrls.s3.default,
           "title": "Bakery Products",
           "actualPrice":"500 Rs",
           "offerPrice":"400 Rs",
           "quantity": 2,
           "wieght":"1 KG",
           "flavour":"Pink",
           "productId":22,
           "catogaryType":"cake",

        }
       ]
     
   }

    

    }

    decorate(CartComponentStore, {
      
      totalCartProducts:observable,
      quantitySelected:observable,
      quantity:observable
    });


    export default CartComponentStore;