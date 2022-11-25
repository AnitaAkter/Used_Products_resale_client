import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopUp, signOut, updateProfile } from "firebase-auth";
import app from "../Firebase"

export const Authcontext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children })
    => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth, currentUser, profile);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopUp(auth, googleProvider)
    }
    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authDetails = {
        user, loading, createUser, updateUserProfile, signInGoogle, signIn, logout
    }
    return (
        <div><Authcontext.Provider value={authDetails}>{children}</Authcontext.Provider></div>
    )
};
export default AuthProvider;