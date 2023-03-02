import React, {useState} from "react";
import {AuthContext} from "./AuthContext";

interface AuthProviderProps {
    children: React.ReactNode;
}

export default function ({children}: AuthProviderProps) {
    const [token, setToken] = useState<string>("");

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    );
}