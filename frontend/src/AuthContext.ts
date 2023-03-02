import {createContext} from "react";

interface AuthToken {
    token: string;
    setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthToken>({
    token: "",
    setToken: (token: string) => {
    },
});