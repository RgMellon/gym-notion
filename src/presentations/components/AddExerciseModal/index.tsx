import React, { useEffect, useState } from "react";

import { Button } from "../Button";

import * as S from "./styles";

export type ExerciseParams = {
  title: string
  description: string
  urlImage: string
  youtubeId: string
}

type AddExerciseModalProps = {
  isLoading: boolean;
  handleToggleModal: () => void;
  handleSubmit: (ExerciseParams) => void;
};

export function AddExerciseModal({
  isLoading,
  handleToggleModal,
  handleSubmit
}: AddExerciseModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urlImage, setUrlImage] = useState('');
  const [youtubeId, setYoutubeId] = useState('');
  const [isDisabled, setIsdisable] = useState(true);

  function handleClick() {
    //TODO fazer verificacao
    handleSubmit({
      title,
      description,
      urlImage,
      youtubeId
    })
  }

  useEffect(() => {
    return setIsdisable(!!title && !!description && !!urlImage && !!youtubeId);
  }, [title, description, urlImage, youtubeId])

  return (
    <S.Container testID="modal-sheet">
      <S.CloseModal onPress={handleToggleModal} testID="close-modal-sheet" />

      <S.Content>
        <S.Title>Criar novo exercicío</S.Title>

        <S.InputTitle>Título</S.InputTitle>
        <S.Input value={title} onChangeText={setTitle}/>

        <S.InputTitle>Descrição:</S.InputTitle>
        <S.Input value={description} onChangeText={setDescription}/>

        <S.InputTitle>Imagem (URL):</S.InputTitle>
        <S.Input value={urlImage} onChangeText={setUrlImage}/>

        <S.InputTitle>Video (ID do youtube):</S.InputTitle>
        <S.Input value={youtubeId} onChangeText={setYoutubeId}/>

        <Button label="Criar" isLoading={isLoading} onPress={handleClick} isDisabled={!isDisabled}/>
      </S.Content>
    </S.Container>
  );
}
