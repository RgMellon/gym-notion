import React from "react";
import { useTheme } from "styled-components";
import { Entypo } from "@expo/vector-icons";

import * as S from "./styles";

export function AddButton() {
  const theme = useTheme();

  return (
    <S.Container>
      <Entypo name="plus" size={25} color={theme.colors.backgroundLight} />
    </S.Container>
  );
}
