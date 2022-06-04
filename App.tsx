import React from "react";
import AppLoading from "expo-app-loading";

import { Theme } from "./src/presentations/templates";


import {
  useFonts,
  Manrope_300Light,
  Manrope_500Medium,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope_300Light,
    Manrope_500Medium,
    Manrope_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Theme>
    <NavigationContainer>
        <AppRoutes />
    </NavigationContainer>
  </Theme>;

}
