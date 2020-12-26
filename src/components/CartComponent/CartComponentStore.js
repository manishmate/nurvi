import { decorate, observable, action } from 'mobx';
import imageUrls from '../../sharedfiles/ImagesURLs';


class CartComponentStore {
	
  	constructor(){
      
   
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
    });


    export default CartComponentStore;