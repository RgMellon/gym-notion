import React from "react";
import { Text } from "react-native";
import { TraineCard } from "../../components/TraineCard";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <S.Banner
        source={{
          uri: "https://img.freepik.com/free-photo/woman-headphones-listens-music-does-warm-up-before-fitness-workout-purple-wall_197531-16613.jpg?size=626&ext=jpg&ga=GA1.2.295759449.1653268050",
        }}
      />

      <S.Content>
        <TraineCard
          title="Treino A"
          image="https://img.freepik.com/free-photo/full-shot-man-training-with-dumbbell_23-2149036375.jpg?size=338&ext=jpg"
        />

        <TraineCard
          title="Treino B"
          image="https://img.freepik.com/free-photo/horizontal-shot-satisfied-motivated-sportswoman-has-regular-training-raises-arms-with-dumbbells-does-exercises-muscles-dressed-sportswear-smiles-toothily-isolated-pink-wall-sport-concept_273609-58641.jpg?size=626&ext=jpg"
        />
      </S.Content>
    </S.Container>
  );
}
