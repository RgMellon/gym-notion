import React, { useState } from "react";

import { Button } from "../Button";

import * as S from "./styles";

type AddTrainingSheetModalProps = {
  isLoading: boolean;
  handleToggleModal: () => void;
  handleSubmit: (nameSheet: string) => void;
};

export function AddTrainingSheetModal({
  isLoading,
  handleToggleModal,
  handleSubmit
}: AddTrainingSheetModalProps) {
  const [nameSheet, setNameSheet] = useState('');

  function handleClick() {
    if(!nameSheet) return

    handleSubmit(nameSheet)
  }

  return (
    <S.Container testID="modal-sheet">
      <S.CloseModal onPress={handleToggleModal} testID="close-modal-sheet" />

      <S.Content>
        <S.Title>Criar nova ficha</S.Title>

        <S.InputTitle>Nome da ficha:</S.InputTitle>
        <S.Input value={nameSheet} onChangeText={setNameSheet}/>

        <Button label="Criar" isLoading={isLoading} onPress={handleClick} isDisabled={!nameSheet}/>
      </S.Content>
    </S.Container>
  );
}
