import React, { useEffect } from "react";

import { AddSheet } from "../../../domain/usecases";
import { LoadSheet } from "../../../domain/usecases/load-sheet";
import { AddButton } from "../../components/AddButton";
import { TrainingSheetCard } from "../../components/TrainingSheetCard";

import * as S from "./styles";

type Props = {
  loadSheet: LoadSheet;
  addSheet: AddSheet;
};

export function AddSheetPage({ addSheet, loadSheet }: Props) {
  useEffect(() => {
    async function getSheets() {
      const response = await loadSheet.load();
      console.log(response);
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

      <S.Content>
        <S.ContentTitle>Minhas Fichas</S.ContentTitle>

        <AddButton />

        <TrainingSheetCard
          title="Treino A"
          image="https://img.freepik.com/free-photo/horizontal-shot-satisfied-motivated-sportswoman-has-regular-training-raises-arms-with-dumbbells-does-exercises-muscles-dressed-sportswear-smiles-toothily-isolated-pink-wall-sport-concept_273609-58641.jpg?size=626&ext=jpg"
        />

        <TrainingSheetCard
          title="Treino B"
          image="https://img.freepik.com/free-photo/muscular-young-gentleman-pumping-up-biceps_7502-9050.jpg?size=626&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050"
        />

        <TrainingSheetCard
          title="Treino C"
          image="https://img.freepik.com/free-photo/young-caucasian-plus-size-female-model-s-training-gradient-purple-green-wall_155003-40612.jpg?size=626&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050"
        />

        <TrainingSheetCard
          title="Treino D"
          image="https://img.freepik.com/free-photo/stylish-young-male-athlete-practicing-white-studio-background-portrait-with-shadows-sportive-fit-model-works-out-motion-action_155003-21861.jpg?size=338&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050"
        />

        <TrainingSheetCard
          title="Treino E"
          image="https://img.freepik.com/free-photo/beautiful-young-female-athlete-practicing-red_155003-40975.jpg?size=626&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050"
        />

        <TrainingSheetCard
          title="Treino F"
          image="https://img.freepik.com/free-photo/sportive-young-man-training-with-weight-barbell-isolated-white-studio-background-situps_155003-45718.jpg?size=626&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050"
        />

        <TrainingSheetCard
          title="Treino G"
          image="https://img.freepik.com/free-photo/portrait-curly-brunette-woman-doing-exercises-purple-wall_197531-16656.jpg?size=626&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050"
        />

        <TrainingSheetCard
          title="Treino H"
          image="https://img.freepik.com/free-photo/young-caucasian-man-bright-clothes-training-blue-background-concept-sport-human-emotions-facial-expression-healthy-lifestyle-youth-sales-doing-stretching-exercises-copyspace_155003-30665.jpg?size=626&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050"
        />

        <TrainingSheetCard
          title="Treino I"
          image="https://img.freepik.com/free-photo/full-shot-man-training-with-dumbbell_23-2149036375.jpg?size=338&ext=jpg"
        />

        <TrainingSheetCard
          title="Treino J"
          image="https://img.freepik.com/free-photo/woman-training-with-kettlebell-full-shot_23-2149338009.jpg?size=338&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050"
        />
      </S.Content>
    </S.Container>
  );
}
