import React from 'react';
import { createContext } from 'react';
import { auth, createUserWithEmailAndPassword  } from '../Config/Config';
export const contextProvier = createContext();
const MainContext = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const allContext = { createUser };
    return (
        <contextProvier.Provider value={allContext}>
            {children}
        </contextProvier.Provider>
    );
};

export default MainContext;