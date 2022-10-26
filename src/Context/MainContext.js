import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword,GithubAuthProvider,GoogleAuthProvider,signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { auth  } from '../Config/Config';
export const contextProvier = createContext();
const MainContext = ({ children }) => {
    // * Create user email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
       signOut(auth)
    }
    // google login
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    //github login
    const gitProvider = new GithubAuthProvider();
    const gitLogin = () => {
        return signInWithPopup(auth, gitProvider)
    }
    const allContext = { createUser ,loginUser, logOut,googleLogin, gitLogin };
    return (
        <contextProvier.Provider value={allContext}>
            {children}
        </contextProvier.Provider>
    );
};

export default MainContext;