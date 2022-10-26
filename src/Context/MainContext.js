import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
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
    const allContext = { createUser ,loginUser };
    return (
        <contextProvier.Provider value={allContext}>
            {children}
        </contextProvier.Provider>
    );
};

export default MainContext;