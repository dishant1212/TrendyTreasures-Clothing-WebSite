import {createContext,useState,useEffect} from "react";

import { onAuthStateChnagedListener,signOutUser } from "../utils/firebase/firebase.utils";


export  const userContext=createContext(null)

export  const  UserProvider=({children})=>{

    const [currentUser,setCurrentUser]=useState()
    const value={currentUser,setCurrentUser}
    // signOutUser()
    
    useEffect(()=>{
   
    const unsubscribe=  onAuthStateChnagedListener((user)=>{
        console.log(user)

    })
    
    unsubscribe()

    },[])
       
    return <userContext.Provider value={value}  >
              {children}
            </userContext.Provider>
}


