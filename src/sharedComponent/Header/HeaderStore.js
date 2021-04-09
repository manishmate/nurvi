import { decorate, observable, action } from 'mobx';
import imageUrls from '../../sharedfiles/ImagesURLs';
import { CgProfile } from 'react-icons/cg';
import {RiBook3Line} from 'react-icons/ri';
import {AiFillHeart,AiOutlineLogout} from 'react-icons/ai';
import { IconContext } from "react-icons";


class HeaderStore {
	
  	constructor(appstore){

        this.appStore    = appstore;
        this.ADD_PRODUCT = 4;

        this.adminOption = {"label":<div className="userprofileBlock"><div className="userprofile-iconblock mr-1">
             <IconContext.Provider value={{className: "social-icons google-icon" }}>
            <CgProfile />
            </IconContext.Provider>
            </div>Admin</div> ,
            value:this.ADD_PRODUCT,id:"myprofile"}


        this.userProfileOption = [
            {"label":<div className="userprofileBlock"><div className="userprofile-iconblock mr-1">
                <IconContext.Provider value={{className: "social-icons google-icon" }}>
                    <CgProfile />
                    </IconContext.Provider>
                    </div>Profile</div> ,
                    value:0,id:"myprofile"},

            {"label":<div className="userprofileBlock"><div className="userprofile-iconblock mr-1">
            <IconContext.Provider value={{className: "social-icons google-icon" }}>
                <RiBook3Line />
                </IconContext.Provider>
                </div>Orders</div>,value:1,id:"orders"},

            {"label":<div className="userprofileBlock"><div className="userprofile-iconblock mr-1">
                <IconContext.Provider value={{className: "social-icons google-icon" }}>
                    <AiFillHeart />
                    </IconContext.Provider>
                    </div>Wishlist</div>,value:2,id:"wishlist"},
            {"label":<div className="userprofileBlock"><div className="userprofile-iconblock mr-1">
            <IconContext.Provider value={{className: "social-icons google-icon" }}>
                <AiOutlineLogout />
                </IconContext.Provider>
                </div>Logout</div>,value:3,id:"logout"}
        
        ];

        this.selectedUserOption =   {"label":"",value:0,id:"myprofile"};
      }


      setSelectedOption = (selectedoption) =>{
        this.selectedUserOption = this.userProfileOption.find(option => option.id === selectedoption.id);
      }

      handleUserOption = (selectedoption) => {
        if(selectedoption.value== this.ADD_PRODUCT)
            this.appStore.navigate("/admin");
        else    
            this.selectedUserOption = selectedoption;
      }
     

    }

    decorate(HeaderStore, {
      
        selectedUserOption:observable,
    });


    export default HeaderStore;