import React, { useEffect, useState } from "react";

import { AddSheet } from "../../../domain/usecases";
import { LoadSheet, Model } from "../../../domain/usecases/load-sheet";

import { AddButton } from "../../components/AddButton";
import { Card } from "../../components/Card";

import * as S from "./styles";

type Props = {
  loadSheet: LoadSheet;
  addSheet: AddSheet;
};

export function AddSheetPage({ addSheet, loadSheet }: Props) {
  const [listSheet, setListSheet] = useState<Model[]>([]);

  useEffect(() => {
    async function getSheets() {
      const response = await loadSheet.load();
      setListSheet(response);
    }

    getSheets();
  }, []);

  async function handleSubmit() {
    try {
      const t = await addSheet.add({
        image: "http://localhost",
        title: "acorda pedrinho",
      });
    } catch (err) {
      alert("error");
    }
  }

  return (
    <S.Container>
      <S.Banner
        source={{
          uri: "https://img.freepik.com/free-photo/dynamic-portrait-young-sportive-woman-training-running-isolated-purple-background-neon-with-mixed-lights_155003-45926.jpg?size=626&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050",
        }}
      />

      <S.Detail />
      <S.Content>
        <S.ContentTitle>Minhas Fichas</S.ContentTitle>

        <AddButton />

        {listSheet.map((sheet) => (
          <Card key={sheet.title} title={sheet.title} image={sheet.image} />
        ))}
      </S.Content>
    </S.Container>
  );
}
