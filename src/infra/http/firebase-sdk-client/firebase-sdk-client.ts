import { HttpPostClient, HttpPostParams } from "../../../data/protocols/http";
import  firestore from '@react-native-firebase/firestore'

export function firebaseSdkClient(): HttpPostClient {
    return {
        async post(params: HttpPostParams) {
            try {
                await firestore().collection(params.url).add(params.body)
            } catch(err)   {
                console.log(err)
            }
        }
    }
}