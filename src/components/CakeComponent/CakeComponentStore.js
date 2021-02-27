import { decorate, observable, action } from 'mobx';
import imageUrls from '../../sharedfiles/ImagesURLs';


class CakeComponentStore {
	
  	constructor(){
      

      this.items = 
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
        },
        {  "imgUrl":imageUrls.catogary_2.default,
           "title":"Pastry",
           "type" : "cake",
           "productId":7
        },
        {  "imgUrl":imageUrls.catogary_2.default,
           "title":"Pastry",
           "type" : "cake",
           "productId":8
        }
      ]
       

    }

 }

    decorate(CakeComponentStore, {
      items:observable
    });


    export default CakeComponentStore;