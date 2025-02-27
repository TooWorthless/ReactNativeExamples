import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PrivateNavigator } from "./PrivateNavigator";
import { AuthProvider } from "../context/AuthContext";

export const RootNavigator = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                <PrivateNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
};
