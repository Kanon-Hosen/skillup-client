import React from 'react';
import { createContext } from 'react';
export const contextProvier = createContext();
const MainContext = ({children}) => {
    const allContext = {}
    return (
        <contextProvier.Provider value={allContext}>
            {children}
        </contextProvier.Provider>
    );
};

export default MainContext;