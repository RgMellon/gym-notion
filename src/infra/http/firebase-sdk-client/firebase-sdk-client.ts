import { HttpPostClient, HttpPostParams } from "../../../data/protocols/http";


export function firebaseSdkClient(): HttpPostClient {
    return {
        post(params: HttpPostParams) {
            try {
                
                return Promise.resolve()
            } catch(err)   {

            }
        }
    }
}