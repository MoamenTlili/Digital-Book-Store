import React, { CreateContext, createContext, useEffect, useState} from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const auth=getAuth(app);
export { auth };
const AuthContext=createContext();


const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const[loading, setLoading]=useState(true);

    const createUser=(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    /*const signUpWithGmail = (email, password) => {
        return signInWi
    }*/
 
    //to show name in navbar
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {return unsubscribe();}
    }, [])

    const authInfo = {
        user,
        setUser,
        createUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

//export default AuthProvider
export { AuthProvider, AuthContext };