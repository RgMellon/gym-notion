import { HttpPostClient, HttpPostParams } from "../protocols/http"

export let httpPostClientSpyURl: string;
export let body: any;  

export function httpPostClientSpy(): HttpPostClient {
    return {
        post(params: HttpPostParams) {
            httpPostClientSpyURl = params.url
            body = params.body

            return Promise.resolve()
        }
    }
}

// httpPostClientSpy.url = url;
// httpPostClientSpy.body = body;
