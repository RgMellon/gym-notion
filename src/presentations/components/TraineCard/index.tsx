import React from "react";

import * as S from "./styled";

type TraineCardProps = {
  title: string;
  image: string;
};

export function TraineCard({ title, image }: TraineCardProps) {
  return (
    <S.Container>
      <S.ContentImage>
        <S.Image source={{ uri: image }} />
      </S.ContentImage>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
