import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import {ReactComponent as CrwnLogo } from "../../assets/crwn.svg"
import "./navigation.style.scss"

const Navigation =()=>{

return(
    <Fragment>
         <div className="navigation">
           <div className="logo-name-container">
             <Link className="logo" to="/"></Link> 
            <Link className="name01">TrendyTreasures</Link>
            </div>
              <div className="nav-links-container">
                <Link className="nav-link" to="/shop"> SHOP</Link>
                <Link className="signIn" to="/sign-in">SIGN IN </Link>
              </div>
         </div>
        <Outlet/>
    </Fragment>
    )
}
export default Navigation;