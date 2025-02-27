import React from "react";
import { SafeAreaView, Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

const DetailsScreen = () => {
    const route = useRoute<DetailsScreenRouteProp>();

    return (
        <SafeAreaView>
            <Text>Детали для ID: {route.params.id}</Text>
        </SafeAreaView>
    );
};

export default DetailsScreen;
