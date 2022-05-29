import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Entypo } from "@expo/vector-icons";

import * as S from "./styles";

type AddButtonProps = {} & TouchableOpacityProps;

export function AddButton({ ...rest }: AddButtonProps) {
  return (
    <S.Container testID="button" {...rest}>
      <Entypo testID="icon" name="plus" size={25} color="#ffffff" />
    </S.Container>
  );
}
