import { Client, firebaseSdkClient } from "../../../infra/http/firebase-sdk-client/firebase-sdk-client";


export const makeFirebaseSdkClient = (): Client => {
  return firebaseSdkClient()
}
