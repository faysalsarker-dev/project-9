/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import app from "../Firebase.config/firebase.config";

export const ContextData = createContext(null);

const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);


    const GoogleProvider = new GoogleAuthProvider();

    //create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign user with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //  user profile name and photo
    const profileUpdate = (name, photo) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    //  Log Out 
    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    };

    // Google 
    const googleLogin=()=>{
        setLoading(true)
     return  signInWithPopup(auth, GoogleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                setLoading(false);
                setUser(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [auth]);

    
    const contextData = {
        createUser,
        signIn,
        profileUpdate,
        user,
        logOut,
        loading,
        setLoading,
        googleLogin
    };

    
    return (
        <ContextData.Provider value={contextData}>
            {children}
        </ContextData.Provider>
    );
};

export default Context;
