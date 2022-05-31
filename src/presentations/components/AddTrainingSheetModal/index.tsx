import React from "react";

import * as S from "./styles";

type AddTrainingSheetModalProps = {
  handleToggleModal: () => void;
};

export function AddTrainingSheetModal({
  handleToggleModal,
}: AddTrainingSheetModalProps) {
  return (
    <S.Container>
      <S.CloseModal onPress={handleToggleModal} />

      <S.Content>
        <S.Title>Criar nova ficha</S.Title>

        <S.InputTitle>Nome da ficha:</S.InputTitle>
        <S.Input />
      </S.Content>
    </S.Container>
  );
}
