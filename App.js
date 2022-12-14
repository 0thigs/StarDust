import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components";
import Theme from "./src/global/styles/theme"
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <StatusBar style={"light"} backgroundColor={"transparent"} />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
