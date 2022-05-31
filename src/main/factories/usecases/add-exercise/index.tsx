import { remoteAddExercise } from "../../../../data/usecases/add-exercise/remote-add-exercise";
import { AddExercise } from "../../../../domain/usecases";
import { makeFirebaseSdkClient } from "../../http/firebase-sdk-client.factory";



export function makeRemoteAddExercise(): AddExercise  {
    return remoteAddExercise({
        url: 'exercise',
        httpClient: makeFirebaseSdkClient()
    })
}