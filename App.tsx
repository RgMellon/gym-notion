import React from "react";
import AppLoading from "expo-app-loading";

import { Theme } from "./src/presentations/templates";
import { makeAddSheet } from "./src/main/factories/pages/add-sheet/add-sheet-factory";
import { makeExercise } from "./src/main/factories/pages/exercises/exercises-factory";

import {
  useFonts,
  Manrope_300Light,
  Manrope_500Medium,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";

export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope_300Light,
    Manrope_500Medium,
    Manrope_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Theme>{makeExercise()}</Theme>;

}
