import React, { useEffect, useState } from "react";
import { Modal, View } from "react-native";
import { AddExercise } from "../../../domain/usecases";
import { LoadExercises } from "../../../domain/usecases/load-exercises";


import * as S from "./styles";

type Props = {
    loadExercises: LoadExercises
    addExercise: AddExercise
};

export function Exercise({ }: Props) {
    return <View />
};

