import { HttpPostClient, HttpPostParams } from "../protocols/http"
import faker from 'faker'

export let httpPostClientSpyURl: string;
export let httpPostClientSpybody: any;  

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
