import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <View>
            <Text>My App</Text>
            {isAuthenticated && <Button title="Выйти" onPress={logout} />}
        </View>
    );
};

export default Header;
