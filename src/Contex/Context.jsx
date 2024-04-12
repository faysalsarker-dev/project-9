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
import { toast } from 'react-hot-toast';

export const ContextData = createContext(null);

const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [favorite,setFavorite]= useState([])

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
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        
        })
       
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
        console.log('useEffect');
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            } else {
                setLoading(false);
                setUser(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [user,auth]);

    

    const AddToFavorite = (pd) => {
        
        const isExist = favorite.find(item => item.id === pd.id);
    
        if (!isExist) {
            
            const newValue = [...favorite, pd];
            setFavorite(newValue); 
            console.log(favorite); 
        } else {
            toast.error("this itam already added")
        }
    }
    




    const contextData = {
        createUser,
        signIn,
        profileUpdate,
        user,
        logOut,
        loading,
        setLoading,
        googleLogin,
        setUser,
        favorite,
        AddToFavorite
    };

    
    return (
        <ContextData.Provider value={contextData}>
            {children}
        </ContextData.Provider>
    );
};

export default Context;
