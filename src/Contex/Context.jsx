/* eslint-disable react/prop-types */
import { createContext } from "react";

export const ContextData = createContext(null)
const Context = ({ children }) => {


const ContextInfo ={

}


    return (
        <ContextData.Provider value={ContextInfo}>
            {children}
        </ContextData.Provider>
    );
};

export default Context;