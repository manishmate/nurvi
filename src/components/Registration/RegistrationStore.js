import { decorate, observable } from 'mobx';

class RegistrationStore {
	
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

    decorate(RegistrationStore, {
      registrationFormData:observable
    });


    export default RegistrationStore;