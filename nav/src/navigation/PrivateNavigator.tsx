import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigator } from "./StackNavigator";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { useAuth } from "../context/AuthContext";

const Stack = createStackNavigator();

export const PrivateNavigator = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <Stack.Screen name="App" component={StackNavigator} />
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </>
            )}
        </Stack.Navigator>
    );
};
