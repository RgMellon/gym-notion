import React, { useEffect, useState } from "react";
import { Modal, View } from "react-native";
import { LoadExercises } from "../../../domain/usecases/load-exercises";


import * as S from "./styles";

type Props = {
    loadExercises: LoadExercises
};

export function Exercise({ }: Props) {
    return <View />
};

