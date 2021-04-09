import {observable,decorate} from 'mobx';
import navigationStore from './sharedfiles/navigationStore';


class Appstore {
    constructor(){
        
        this.cartCount = 1;
        this.isAdmin = false;
        this.loggedIn = true;
        this.userInfo = {};
        
    }


    navigate(link){
        this.menuChanged = link;
        navigationStore.push(link);
    }

    // goBackto(){
    //     navigationStore.goBack();
    // }
}
decorate( Appstore ,{
    
    cartCount:observable,
    isAdmin: observable,
    loggedIn: observable,
    userInfo: observable,
    menuChanged: observable,

}

)
export default Appstore