import React from "react";
import { SafeAreaView, Button, Text } from "react-native";
import { useAuth } from "../context/AuthContext";

const ProfileScreen = () => {
    const { logout } = useAuth();

    return (
        <SafeAreaView>
            <Text>Профиль</Text>
            <Button title="Выйти" onPress={logout} />
        </SafeAreaView>
    );
};

export default ProfileScreen;
