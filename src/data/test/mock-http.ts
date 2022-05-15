import { HttpPostClient, HttpPostParams } from "../protocols/http"

export let httpPostClientSpyURl: string;
export let httpPostClientSpybody: any;  

export function httpPostClientSpy(): HttpPostClient {
    return {
        post(params: HttpPostParams) {
            httpPostClientSpyURl = params.url
            httpPostClientSpybody = params.body

            return Promise.resolve()
        }
    }
}
