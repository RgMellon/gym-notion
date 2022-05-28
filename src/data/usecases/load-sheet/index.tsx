import { LoadSheet, Model } from '../../../domain/usecases/load-sheet';
import {
    HttpGetClient,
  } from '../../protocols/http'

type Props = {
    url: string;
    httpClient: HttpGetClient
}

export function remoteLoadSheet({ url, httpClient }: Props): LoadSheet {
    return {
        async load(): Promise<Model[]> {
            const httpResponse = await httpClient.get({url:url})
            return httpResponse.body
        }
    }
}



