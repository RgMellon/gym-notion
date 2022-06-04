import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styled";

type CardProps = {
  title: string;
  image: string;
} & TouchableOpacityProps;

export function Card({ title, image, ...rest }: CardProps) {
  return (
    <S.Container {...rest}>
      <S.ContentImage>
        <S.Image testID="image" source={{ uri: image }} />
      </S.ContentImage>

      <S.Title testID="title">{title}</S.Title>
    </S.Container>
  );
}
