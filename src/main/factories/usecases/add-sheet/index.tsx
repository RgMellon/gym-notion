import { remoteAddSheet } from "../../../../data/usecases/add-sheet/remote-add-sheet";
import { AddSheet } from "../../../../domain/usecases";
import { makeFirebaseSdkClient } from "../../http/firebase-sdk-client.factory";



export function makeRemoteAddSheet(): AddSheet  {
    return remoteAddSheet({
        url: 'gym-notion',
        httpPostClient: makeFirebaseSdkClient()
    })
}