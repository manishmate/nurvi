import { decorate, observable, action } from 'mobx';
import imageUrls from '../../sharedfiles/ImagesURLs';


class AddProductStore {
	
  	constructor(){

      this.cakeData = 
        [
          {  "imgUrl":imageUrls.catogary_2.default,
             "title":"Pastry",
             "type" : "cake",
             "productId":6
          }
        ]

      this.allproducts = [
        {  "imgUrl":imageUrls.catogary_2.default,
             "label":"Cake",
             "type" : "cake",
             "value":0
          },
          {  "imgUrl":imageUrls.catogary_2.default,
             "label":"Pastry",
             "type" : "cake",
             "value":1
          },
          {  "imgUrl":imageUrls.catogary_2.default,
             "label":"Pastry 1",
             "type" : "cake",
             "value":2
          },
          {  "imgUrl":imageUrls.catogary_2.default,
             "label":"Pastry 2",
             "type" : "cake",
             "value":3
          }
      ]
      
      this.productSelected = this.allproducts[0];
      
      this.allCategory = [
        {  "imgUrl":imageUrls.catogary_2.default,
             "label":"Pastry 1",
             "type" : "cake",
             "value":0
          },
          {  "imgUrl":imageUrls.catogary_2.default,
             "label":"Pastry 2",
             "type" : "cake",
             "value":1
          },
          {  "imgUrl":imageUrls.catogary_2.default,
             "label":"Pastry 3",
             "type" : "cake",
             "value":2
          },
          {  "imgUrl":imageUrls.catogary_2.default,
             "label":"Pastry 4",
             "type" : "cake",
             "value":3
          }
      ]

      this.categorySelected = this.allCategory[0];

    }

   }

    decorate(AddProductStore, {
      categorySelected:observable,
      allCategory:observable,
      productSelected:observable,
      allproducts:observable


    });


    export default AddProductStore;