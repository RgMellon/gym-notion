import { remoteLoadExercise } from "../../../../data/usecases/load-exercises";
import { LoadExercises } from "../../../../domain/usecases/load-exercises";
import { makeFirebaseSdkClient } from "../../http/firebase-sdk-client.factory";


export function makeRemoteListExercises(): LoadExercises  {
    return remoteLoadExercise({
        url: 'exercises', // TODO : isolar em uma factory
        httpClient: makeFirebaseSdkClient()
    })
}