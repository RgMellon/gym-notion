import { useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-native";
import { AddExercise } from "../../../domain/usecases";
import { ExerciseModel, LoadExercises } from "../../../domain/usecases/load-exercises";
import { AddButton } from "../../components/AddButton";
import { AddExerciseModal, ExerciseParams } from "../../components/AddExerciseModal";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Empty } from "../../components/Empty";
import { Load } from "../../components/Load";

import * as S from "./styles";


type Props = {
    loadExercises: LoadExercises
    addExercise: AddExercise
};

type RouteParams = {
  sheetId: string
}

export function Exercise({ loadExercises, addExercise}: Props) {
    const { params } = useRoute()
    const routeParams = params as RouteParams;

    const playerRef = useRef();
    
    const [listExercises, setListExercises] = useState<ExerciseModel[]>([]);
    const [currentVideo, setCurrentVideo] = useState('')
    const [load, setLoad] = useState(true);
    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        async function getExercises() {
          try {
            const response = await loadExercises.load();
            setListExercises(response);
            setCurrentVideo(response[0].video)
            setLoad(false)
          } catch(err) {
            setLoad(false)
          }
        }
    
        getExercises();
      }, []);

    function handleSelectExercise(exercise: ExerciseModel) {
          if(currentVideo === exercise.video) return
            setCurrentVideo(exercise.video)
    }

    function handleToggleModal() {
      setIsOpenModal(old => !old) 
    }

    async function handleSubmit(exerciseParams: ExerciseParams) {
      try {

        const exercise = {
          image: exerciseParams.urlImage,
          title: exerciseParams.title,
          video: exerciseParams.youtubeId,
          description: exerciseParams.description,
          sheet_id: routeParams.sheetId
        }

        await addExercise.add(exercise)

        setListExercises(old => [...old, exercise]);
        setCurrentVideo(exercise.video)

        handleToggleModal()

      } catch(err) {
        alert('errro')
      }
    }
    
    return <>
      {load ? <Load /> : 
        <>
          {listExercises.length === 0 && !load 
          ? 
            <Empty >
              <Button style={{borderRadius: 200, width: 250 }} label="Adicionar novo exercicío" isLoading={false} isDisabled={false}  onPress={handleToggleModal}/>
            </Empty>
          : <S.Container>
              <AddButton onPress={handleToggleModal} />
              <S.VideoPlayer
                ref={playerRef}
                height={250}
                videoId={currentVideo}
              />
              <S.Content>
                <S.ContentTitle>Meus exercicios</S.ContentTitle>
                {listExercises.map((exercise) => (
                  <Card key={exercise.video} onPress={() => {handleSelectExercise(exercise)}} title={exercise.title} image={exercise.image} />
                ))}
              </S.Content>
            </S.Container>}
        </>
      }

        <Modal
          animationType="slide"
          transparent={true}
          visible={isOpenModal}
          onRequestClose={()=>{}}
        > 
          <AddExerciseModal
              isLoading={false}
              handleToggleModal={handleToggleModal}
              handleSubmit={handleSubmit}
          />        
        </Modal>
    </>
};

