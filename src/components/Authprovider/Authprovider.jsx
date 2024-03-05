
import React, {  createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase_init';



export const AuthContext=createContext(null);

const googleProvider= new GoogleAuthProvider()


const Authprovider = ({children}) => {
    const [user ,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
const SIngupCrate=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}


  
   const signinUser=(email,password)=>{
    setLoading(true)
    return  signInWithEmailAndPassword(auth,email,password)
   }

const signinWithgoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}


const logOut=()=>{
    setLoading(true)
   return signOut(auth)
}



   ///observer
   
useEffect(()=>{
    const unsubscrive= onAuthStateChanged(auth, currentUser=>{
        console.log('observing currebt user',currentUser)
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
        unsubscrive()
    }
},[])


   
    const authinfomation=
    {
      user,
      SIngupCrate,
      signinUser,
      logOut,
      loading,
      signinWithgoogle,

      
    }




    return (
        <AuthContext.Provider value={authinfomation}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;