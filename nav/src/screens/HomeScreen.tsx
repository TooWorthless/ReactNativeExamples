import React from "react";
import { SafeAreaView, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";
import Header from "../components/Header";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <SafeAreaView>
            <Header/>
            <Text>Главная</Text>
            <Button title="Перейти к деталям" onPress={() => navigation.navigate("Details", { id: 1 })} />
        </SafeAreaView>
    );
};

export default HomeScreen;
