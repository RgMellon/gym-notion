import { useRoute } from "@react-navigation/native";
import { ResizeMode, Video } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import { AddExercise } from "../../../domain/usecases";
import { ExerciseModel, LoadExercises } from "../../../domain/usecases/load-exercises";
import { Card } from "../../components/Card";

import * as S from "./styles";


type Props = {
    loadExercises: LoadExercises
    addExercise: AddExercise
};

type RouteParams = {
  sheetId: string
}

export function Exercise({ loadExercises}: Props) {
    const { params } = useRoute()
    const routeParams = params as RouteParams;

    const playerRef = useRef();
    
    const [listExercises, setListExercises] = useState<ExerciseModel[]>([]);
    const [currentVideo, setCurrentVideo] = useState('')
    const [load, setLoad] = useState(true);

    useEffect(() => {
        async function getExercises() {
          const response = await loadExercises.load();
          setListExercises(response);
          setCurrentVideo(response[0].video)
          setLoad(false)
        }
    
        getExercises();
      }, []);

      function handleSelectExercise(exercise: ExerciseModel) {
          if(currentVideo === exercise.video) return
            setCurrentVideo(exercise.video)
      }

    return <>
    <S.Container>
        <S.VideoPlayer
        ref={playerRef}
        height={250}
        videoId={currentVideo}
      />
    <S.Content>
      <S.ContentTitle>Meus exercicios</S.ContentTitle>

      {/* <AddButton onPress={handleToggleAddTrainingSheetModal} /> */}
      
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isOpenModal}
        onRequestClose={handleToggleAddTrainingSheetModal}
      >
        <AddTrainingSheetModal
          handleToggleModal={handleToggleAddTrainingSheetModal}
        />
      </Modal> */}

      {listExercises.map((exercise) => (
          
            <Card onPress={() => {handleSelectExercise(exercise)}} title={exercise.title} image={exercise.image} />
        
      ))}
    </S.Content>
  </S.Container>
  </>
};

