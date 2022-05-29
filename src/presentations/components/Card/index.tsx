import React from "react";

import * as S from "./styled";

type CardProps = {
  title: string;
  image: string;
};

export function Card({ title, image }: CardProps) {
  return (
    <S.Container>
      <S.ContentImage>
        <S.Image testID="image" source={{ uri: image }} />
      </S.ContentImage>

      <S.Title testID="title">{title}</S.Title>
    </S.Container>
  );
}
