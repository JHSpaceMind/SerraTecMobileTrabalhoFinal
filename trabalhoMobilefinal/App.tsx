import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { Rotas } from "./src/routes/rotas";
import NavBar from "./src/components/NavBar/NavBar";
import AuthProvider from "./src/components/Context/AuthContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <NavBar/>
        <Rotas />
      </AuthProvider>
    </NavigationContainer>
  );
}
