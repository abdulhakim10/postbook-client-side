import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

// google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [newUser, setNewUser] =  useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email-password
    const signUp = async(email, password, name) => {

        const profile = {
            displayName: name,
            // photoURL: newImage
        }
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, profile);
    }


    // sign in with email-password
    const logIn = async(email, password) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
    }


    // sigIn/up with google
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    // log out
    const logOut = async() => {
        await signOut(auth)
    }


    // updated user
    useEffect(() => {
        fetch(`https://postbook-server-side.vercel.app/user?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setNewUser(data);
        })
    },[user?.email]);


    // observer
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false)
        })
        return () => unSubscribe();
    },[])

    const authInfo = {
        user,
        newUser,
        signUp,
        logIn,
        googleSignIn,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;