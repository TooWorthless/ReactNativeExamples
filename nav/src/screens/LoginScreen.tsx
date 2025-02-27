import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, Text } from "react-native";
import { useAuth } from "../context/AuthContext";

const LoginScreen = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView>
            <Text>Логин</Text>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
            <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
            <Button title="Войти" onPress={() => login(username, password)} />
        </SafeAreaView>
    );
};

export default LoginScreen;
