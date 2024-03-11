import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import "./navigation.style.scss"
import { useContext } from "react";
import { userContext } from "../../user-context/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation =()=>{
  const {currentUser,setCurrentUser} =useContext(userContext)
  console.log(currentUser)

  const signOutHandler=async ()=>{
        await signOutUser()
        setCurrentUser(null)
       
  }
return(
    <Fragment>
         <div className="navigation">
           <div className="logo-name-container">
             <Link className="logo" to="/"></Link> 
            <Link className="name01">TrendyTreasures</Link>
            </div>
              <div className="nav-links-container">
                <Link className="nav-link" to="/shop"> SHOP</Link>
                {currentUser ? (
                  <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                ) :(
                  <Link className="signIn" to="/sign-in">SIGN IN </Link>
                )
              }
                
              </div>
         </div>
        <Outlet/>
    </Fragment>
    )
}
export default Navigation;