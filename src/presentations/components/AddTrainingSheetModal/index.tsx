import React, { useState } from "react";

import { Button } from "../Button";

import * as S from "./styles";

type AddTrainingSheetModalProps = {
  handleToggleModal: () => void;
};

export function AddTrainingSheetModal({
  handleToggleModal,
}: AddTrainingSheetModalProps) {
  const [nameSheet, setNameSheet] = useState('');

  function handleClick() {
    console.log('clicou')
  }

  return (
    <S.Container testID="modal-sheet">
      <S.CloseModal onPress={handleToggleModal} testID="close-modal-sheet" />

      <S.Content>
        <S.Title>Criar nova ficha</S.Title>

        <S.InputTitle>Nome da ficha:</S.InputTitle>
        <S.Input value={nameSheet} onChangeText={setNameSheet}/>

        <Button label="Criar" onPress={handleClick} isDisabled={!nameSheet}/>
      </S.Content>
    </S.Container>
  );
}
