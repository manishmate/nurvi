import { decorate, observable } from 'mobx';

class AboutUsComponentStore {
	
  	constructor(){
      
      this.registrationFormData =  {
         firstName:"",
         lastName:"",
         email:"",
         phoneNumber:"",
         pass1:"",
         pass2:"",
       }
       

    }

   }

    decorate(AboutUsComponentStore, {
      registrationFormData:observable
    });


    export default AboutUsComponentStore;