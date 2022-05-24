import { firebaseSdkClient } from "../../../infra/http/firebase-sdk-client/firebase-sdk-client";
import { HttpPostClient } from "../../../data/protocols/http";



export const makeFirebaseSdkClient = (): HttpPostClient => {
  return firebaseSdkClient()
}
