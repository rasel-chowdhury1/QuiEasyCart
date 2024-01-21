import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logout = () =>{
        localStorage.removeItem("userId");
        return signOut(auth);
    }

    //observe user auth state
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('this data from authprovider ',currentUser)
            setLoading(false);

            //get and set token
            if(currentUser){
                axios.post('http://localhost:3000/jwt', {email: currentUser.email})
                .then(data => {
                    // console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

        })

        return () =>{
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleSignin,
        logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;