import { decorate, observable, action } from 'mobx';
import imageUrls from '../../sharedfiles/ImagesURLs';


class CakeComponentStore {
	
  	constructor(){
      

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
        ]
       

    }

 }

    decorate(CakeComponentStore, {
      
    });


    export default CakeComponentStore;