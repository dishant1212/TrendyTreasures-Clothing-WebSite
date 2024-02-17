import { initializeApp } from "firebase/app";
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth"

import {
   getFirestore,
   doc,
   getDoc,
   setDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAvGkpP6OcqMcDFGj1_NfVQS5_g9xQLqRw",
    authDomain: "crwn-clothing-db-aefd4.firebaseapp.com",
    projectId: "crwn-clothing-db-aefd4",
    storageBucket: "crwn-clothing-db-aefd4.appspot.com",
    messagingSenderId: "368593528399",
    appId: "1:368593528399:web:c916985f9445247eb32c3a"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:"select_account"
  })
// console.log("provider",provider)

  export const auth=getAuth();
  // console.log("auth:",auth)

  export const signInWithGooglePopup=()=> signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect=()=> signInWithRedirect(auth,googleProvider )

  export const db=getFirestore();
  // console.log("db:",db)

  export const createUserDocumentFromAuth=async (userAuth,additionalInformation={
    displayName:"mike"
  }) =>{
    if(!userAuth) return;
    const userDocRef=doc(db,"users",userAuth.uid)
    // console.log("userDocRef:",userDocRef)

    const userSnapshot=await getDoc(userDocRef);
    // console.log("userSnapshot",userSnapshot)
    console.log(userSnapshot.exists())
 
    //if user data not exist (false)
    //create / set the document with the data fro m userAuth in my collection
if(!userSnapshot.exists()){
  const { displayName,email}=userAuth;
  const createDate=new Date();

  try{
       await setDoc(userDocRef,{
        displayName,
        email,
        createDate,
        ...additionalInformation
       })
  }catch(error){
       console.log("error creatin the user",error.message);
  }
}

return userDocRef;

    //if user data exists (true)
    //return userDocRef


  }   

export const createAuthUserWithEmailAndPassword=async (email,password)=>{
        if(!email || !password) return ;
     return  await createUserWithEmailAndPassword(auth,email,password)
   
}

export const signInAuthWithEmailAndPassword=async (email,password)=>{
  if(!email || !password) return ;
  return  await signInWithEmailAndPassword(auth,email,password)

}

  