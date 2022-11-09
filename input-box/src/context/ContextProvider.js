import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// Initial States
const initialState = {
    
}

// State Provider
export const ContextProvider = ({ children }) => {

    return (
        <StateContext.Provider
            value={{
                initialState
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);