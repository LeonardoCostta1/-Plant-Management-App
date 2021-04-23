import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import React from "react";
import AppLoading from "expo-app-loading";
import Routes from "./src/Routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Routes />;
}
