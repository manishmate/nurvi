import { decorate, observable, action } from 'mobx';
import imageUrls from '../../sharedfiles/ImagesURLs';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from "react-icons";


class HeaderStore {
	
  	constructor(){
           
        
        this.userProfileOption = [
            {"label":<div className="userprofileBlock"><div className="userprofile-iconblock mr-1">
                <IconContext.Provider value={{className: "social-icons google-icon" }}>
                    <CgProfile />
                    </IconContext.Provider>
                    </div>Profile</div> ,value:0,id:"myprofile"},

            {"label":"Orders",value:1,id:"orders"},
            {"label":"Wishlist",value:2,id:"wishlist"},
            {"label":"Logout",value:3,id:"logout"}
        
        ];

        this.selectedUserOption =   {"label":"",value:0,id:"myprofile"};
      }

    }

    decorate(HeaderStore, {
      
        selectedUserOption:observable,
    });


    export default HeaderStore;