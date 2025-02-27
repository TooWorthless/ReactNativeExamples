import React, { createContext, useState, useContext, ReactNode } from "react";
import { Alert } from 'react-native';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (username: string, password: string) => {
        if (username === "admin" && password === "password") {
            setIsAuthenticated(true);
        } else {
            Alert.alert("Неправильные учетные данные!");
        }
    };

    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
