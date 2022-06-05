import { remoteLoadExercise } from "../../../../data/usecases/load-exercises";
import { LoadExercises } from "../../../../domain/usecases/load-exercises";
import { makeFirebaseSdkClient } from "../../http/firebase-sdk-client.factory";


export function makeRemoteListExercises(sheetId: string): LoadExercises  {
    const url = `exercises?sheetId=${sheetId}`;
    return remoteLoadExercise({
        url, // TODO : isolar em uma factory
        httpClient: makeFirebaseSdkClient()
    })
}