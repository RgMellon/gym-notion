import React from "react";

import * as S from "./styled";

type TrainingSheetCardProps = {
  title: string;
  image: string;
};

export function TrainingSheetCard({ title, image }: TrainingSheetCardProps) {
  return (
    <S.Container>
      <S.ContentImage>
        <S.Image source={{ uri: image }} />
      </S.ContentImage>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
