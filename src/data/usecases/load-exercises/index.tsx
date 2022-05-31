import { ExerciseModel, LoadExercises } from '../../../domain/usecases/load-exercises';
import {
    HttpGetClient,
  } from '../../protocols/http'

type Props = {
    url: string;
    httpClient: HttpGetClient
}

export function remoteLoadExercise({ url, httpClient }: Props): LoadExercises {
    return {
        async load(): Promise<ExerciseModel[]> {
            const httpResponse = await httpClient.get({url:url})
            return httpResponse.body
        }
    }
}



