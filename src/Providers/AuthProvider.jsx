import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase';
import axios from 'axios';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)

                const user = { email: currentUser?.email }
                axios.post(`${import.meta.env.VITE_URL}/jwt`, user, { withCredentials: true })
                    .then(res => console.log('LogIn', res.data))
            }
            else {
                setUser(null)

                axios.post(`${import.meta.env.VITE_URL}/logout`, {}, {
                    withCredentials: true,
                }).then(res => console.log('LogOut', res.data))
            }
            setLoading(false)
            console.log('User', currentUser);
        })

        return () => {
            unSubscribe()
        }
    }, []);

    const authInfo = {
        user,
        email,
        setEmail,
        loading,
        setLoading,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
