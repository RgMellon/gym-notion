import React from "react";
import { Text } from "react-native";
import { TraineCard } from "../../components/TraineCard";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <S.Banner
        source={{
          uri: "https://img.freepik.com/free-photo/dynamic-portrait-young-sportive-woman-training-running-isolated-purple-background-neon-with-mixed-lights_155003-45926.jpg?size=626&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050",
        }}
      />

      <S.Content>
        <S.ContentTitle>Minhas Fichas</S.ContentTitle>
        <TraineCard
          title="Treino A"
          image="https://img.freepik.com/free-photo/full-shot-man-training-with-dumbbell_23-2149036375.jpg?size=338&ext=jpg"
        />

        <TraineCard
          title="Treino B"
          image="https://img.freepik.com/free-photo/horizontal-shot-satisfied-motivated-sportswoman-has-regular-training-raises-arms-with-dumbbells-does-exercises-muscles-dressed-sportswear-smiles-toothily-isolated-pink-wall-sport-concept_273609-58641.jpg?size=626&ext=jpg"
        />

        <TraineCard
          title="Treino C"
          image="https://img.freepik.com/free-photo/young-caucasian-plus-size-female-model-s-training-gradient-purple-green-wall_155003-40612.jpg?size=626&ext=jpg&uid=R7440404&ga=GA1.2.295759449.1653268050"
        />
      </S.Content>
    </S.Container>
  );
}
