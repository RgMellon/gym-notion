import React from "react";

import { Entypo } from "@expo/vector-icons";

import * as S from "./styles";

export function AddButton() {
  return (
    <S.Container testID="button">
      <Entypo testID="icon" name="plus" size={25} color="#ffffff" />
    </S.Container>
  );
}
