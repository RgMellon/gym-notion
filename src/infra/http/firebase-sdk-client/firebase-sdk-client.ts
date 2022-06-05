import { HttpGetParams, HttpPostClient, HttpPostParams, HttpGetClient } from "../../../data/protocols/http";
import  firestore from '@react-native-firebase/firestore'
import { HttpResponse } from "../../../data/protocols/http/http-response";


export type Client = {
} & HttpPostClient & HttpGetClient


export function firebaseSdkClient(): Client  {
    return {
        async post(params: HttpPostParams) {
            try {
                const response = await firestore().collection(params.url).add(params.body);
                
                return {
                    id: response.id
                }
            } catch(err)   {
                console.log(err)
            }
        },

        async get(params: HttpPostParams): Promise<HttpResponse> {
            const [url, param] = params.url.split('?')
            
            try {
                let response;

                if(!!param)  {
                  const [_, id] = param.split('=')
                  response =  await firestore().collection(url).where('sheet_id', '==', id).get()
                  
                } else {
                    response =  await firestore().collection(url).get()
                }
                
                return {
                    statusCode: 200,
                    body: response.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                }

            } catch(err)   {
                console.log(err)
            }
        }
        
            
    }
}