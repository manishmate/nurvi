import { decorate, observable } from 'mobx';

class ContactComponentStore {
	
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

    decorate(ContactComponentStore, {
      registrationFormData:observable
    });


    export default ContactComponentStore;