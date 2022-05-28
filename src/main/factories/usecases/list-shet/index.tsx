import { remoteLoadSheet } from "../../../../data/usecases/load-sheet";
import { LoadSheet } from "../../../../domain/usecases";
import { makeFirebaseSdkClient } from "../../http/firebase-sdk-client.factory";


export function makeRemoteListSheet(): LoadSheet  {
    return remoteLoadSheet({
        url: 'gym-notion', // TODO : isolar em uma factory
        httpClient: makeFirebaseSdkClient()
    })
}