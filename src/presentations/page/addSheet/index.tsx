import React, { useEffect, useState } from "react";
import { Modal } from "react-native";

import { AddSheet } from "../../../domain/usecases";
import { LoadSheet, Model } from "../../../domain/usecases/load-sheet";

import { AddButton } from "../../components/AddButton";
import { Card } from "../../components/Card";
import { AddTrainingSheetModal } from "../../components/AddTrainingSheetModal";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  loadSheet: LoadSheet;
  addSheet: AddSheet;
};

export function AddSheetPage({ addSheet, loadSheet }: Props) {
  const navigation = useNavigation()

  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [listSheet, setListSheet] = useState<Model[]>([]);

  useEffect(() => {
    async function getSheets() {
      const response = await loadSheet.load();
      setListSheet(response);
    }

    getSheets();
  }, []);

  async function handleSubmit(nameSheet: string) {
    try {
      setIsLoading(true)
      const newSheet = {
        image: "https://img.freepik.com/free-photo/smiling-girl-posing-with-dumbbels-athletic-young-woman-training-yellow-background_197531-25820.jpg?size=626&ext=jpg",
        title: nameSheet,
      };

      await addSheet.add(newSheet);

      setListSheet(oldSheet => [...oldSheet, newSheet]);
    } catch (err) {
      alert("error");
    } finally {
      setIsLoading(false);
      handleToggleAddTrainingSheetModal();
    }
  }

  function handleToggleAddTrainingSheetModal() {
    console.log(isOpenModal);
    setIsOpenModal(!isOpenModal);
  }

  function handleRedirect() {
    navigation.navigate('Exercises')
  }

  return (
    <S.Container>
      <S.Banner
        source={{
          uri: "https://img.freepik.com/free-photo/dynamic-portrait-young-sportive-woman-training-running-isolated-purple-background-neon-with-mixed-lights_155003-45926.jpg?size=626&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050",
        }}
      />

      <S.Detail />

      <AddButton onPress={handleToggleAddTrainingSheetModal} />
      
      <S.Content>
        <S.ContentTitle>Minhas Fichas</S.ContentTitle>

        
        <Modal
          animationType="slide"
          transparent={true}
          visible={isOpenModal}
          onRequestClose={handleToggleAddTrainingSheetModal}
        >
          <AddTrainingSheetModal
            isLoading={isLoading}
            handleToggleModal={handleToggleAddTrainingSheetModal}
            handleSubmit={handleSubmit}
          />
        </Modal>

        {listSheet.map((sheet) => (
          <Card key={sheet.title} title={sheet.title} image={sheet.image} onPress={handleRedirect} />
        ))}
      </S.Content>
    </S.Container>
  );
}
