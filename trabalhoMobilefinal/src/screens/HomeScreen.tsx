import { View, Text, Button } from "react-native";
import React from "react";
import { HomeScreenProps } from "../types/navigation";
import Login from "../components/Login";

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Login/>
      <Button
        title="ir para Vitrini"
        onPress={() => navigation.navigate("Vitrini")}
      />
    </View>
  );
};