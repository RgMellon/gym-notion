import React from "react";

import LottieView from "lottie-react-native";
import load from "./load.json";

import * as S from "./styles";

export function Load() {
  return (
    <S.Container testID="load">
      <LottieView
        testID="load-animation"
        autoPlay
        source={load}
        loop
      />
    </S.Container>
  );
}