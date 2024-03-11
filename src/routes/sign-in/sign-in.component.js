import "./sign-in.style.scss"
import { Fragment, useEffect } from "react";
import { getRedirectResult} from "firebase/auth";
import { useContext } from "react";
import {userContext} from "../../user-context/user.context"

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInAuthWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import SignUp from "../../components/sign-up/sign-up.component"
import {useState} from "react"


const defaultFormFaild={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
}

const SignIn=()=>{

    const [formFaild,setFormFaild]  = useState(defaultFormFaild)
    const {displayName,email,password,confirmPassword} = formFaild
             const {setCurrentUser}   = useContext(userContext)
            

    const resetFormFields=()=>{
        setFormFaild(defaultFormFaild)
    }
     const signInWithGoogle=async ()=>{
    const {user}=await signInWithGooglePopup()
    const userDocRef=await createUserDocumentFromAuth(user);

}
 
// const signInWithGoogle=async ()=>{
//       const {user}=await signInWithGoogleRedirect()
//       const userDocRef=await createUserDocumentFromAuth(user);
  
//   }
    const handleChange=(event)=>{
        const {name,value} = event.target;

        setFormFaild({...formFaild,[name]:value})
    }
    const handleSubmit= async (event)=>{
        event.preventDefault();

      try{
      const {user}=await signInAuthWithEmailAndPassword(email,password)
      setCurrentUser(user)
       resetFormFields();
      }catch(error){
         if(error.code === "auth/invalid-credential"){
            alert("incorrect credential")
         }
            // switch(error.code){
            //     case "auth/wrong-password":
            //         alert("incorrect password for email")
            //         break;
            //     case "auth/user-not-found":
            //         alert("no user associated with this")
            //         break;
            //     default :
            //     console.log(error)

            // }
            
     console.log(error)

      }

    }
   

return(
  <Fragment>
<div className="signInContainer">
    <h2 className="signIn-headdingStyle">Already have an account?</h2>
    <p className="signIn-paraStyle">Sign In with your email and password</p>
 <form onSubmit={handleSubmit}>

     <label>Email</label><br/>
     <input required type="email" name="email" value={email} onChange={handleChange} placeholder="Enter email"/><br/>

     <label>Password</label><br/>
     <input required type="password" name="password" value={password} onChange={handleChange} placeholder="Enter password"/><br/>

    
     <button className="signInBtn" type="submit">Sign In</button><br/>

     <button className="googleSignInBtn" onClick={signInWithGoogle}>Google Sign In</button>
     

 </form>

</div>
<SignUp/>
</Fragment>
    )
}
export default SignIn;