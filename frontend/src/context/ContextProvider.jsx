import { createContext, useContext, useState, useEffect } from "react";
import React from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, _setToken] = useState(() => sessionStorage.getItem("ACCESS_TOKEN") || null);

    useEffect(() => {
        console.log("token recupere contextProvider:", token);
        if (!token) {
            _setToken(null);
            sessionStorage.removeItem("ACCESS_TOKEN");
        }
    }, [token]);
    
    

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            sessionStorage.setItem("ACCESS_TOKEN", token);
        } else {
            sessionStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider value={{ user, token, setUser, setToken }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => {
    return useContext(StateContext);
};