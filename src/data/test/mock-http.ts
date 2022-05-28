import { HttpGetClient, HttpGetParams, HttpPostClient, HttpPostParams } from "../protocols/http"
import faker from 'faker'
import { HttpResponse } from "../protocols/http/http-response";

export let httpPostClientSpyURl: string;
export let httpPostClientSpybody: any;  


export let httpGettClientSpyURl: string;

export const mockPostRequest = (): HttpPostParams => ({
    url: faker.internet.url(),
    body: faker.random.objectElement()
})

export function httpPostClientSpy(): HttpPostClient {
    return {
        post(params: HttpPostParams) {
            httpPostClientSpyURl = params.url
            httpPostClientSpybody = params.body

            return Promise.resolve()
        }
    }
}





export function httpGetClientSpy<R = any>(body?: R): HttpGetClient<R> {
    return {
         async get(params: HttpGetParams): Promise<HttpResponse<R>> {
            httpGettClientSpyURl = params.url
             const {response} = makeResponse<R>(body)
             return response
        }
    }
}


function makeResponse<R>(body: R) {
    return {
        response: {
            statusCode: 200,
            body: body
        } as HttpResponse<R>
    }
}