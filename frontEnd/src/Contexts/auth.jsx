import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = (username, senha) => {
        console.log("login auth", { username, senha });

        if(senha === "1234") {
            setUser({id:"123", username});
            navigate("/profile");
        }
    };

    const logOut = () => {
        console.log("logOut");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{authenticated: !!user, user, login, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}