import { AddExercise, ExerciseParams } from "../../../domain/usecases";
import {
    HttpPostClient,
  } from '../../protocols/http'

type Props = {
    url: string;
    httpClient: HttpPostClient
}

export function remoteAddExercise({ url, httpClient }: Props):  AddExercise {
    return {
        async add(params: ExerciseParams) {
            await httpClient.post({ url, body: params })
        }
    }
}



