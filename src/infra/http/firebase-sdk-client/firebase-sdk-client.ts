import { HttpGetParams, HttpPostClient, HttpPostParams, HttpGetClient } from "../../../data/protocols/http";
import  firestore from '@react-native-firebase/firestore'
import { HttpResponse } from "../../../data/protocols/http/http-response";


export type Client = {
} & HttpPostClient & HttpGetClient


export function firebaseSdkClient(): Client  {
    return {
        async post(params: HttpPostParams) {
            try {
                await firestore().collection(params.url).add(params.body)
            } catch(err)   {
                console.log(err)
            }
        },

        async get(params: HttpPostParams): Promise<HttpResponse> {
            try {
                const response = await firestore().collection(params.url).get()
                
                return {
                    statusCode: 200,
                    body: response.docs.map(doc => doc.data())
                }

            } catch(err)   {
                console.log(err)
            }
        }
        
            
    }
}