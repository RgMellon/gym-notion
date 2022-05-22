import { AddSheet, Params as AddSheetParams } from "../../../domain/usecases";
import {
    HttpPostClient,
  } from '../../protocols/http'

type Props = {
    url: string;
    httpPostClient: HttpPostClient
}

export function remoteAddSheet({ url, httpPostClient }: Props):  AddSheet {
    return {
        async add(params: AddSheetParams) {
            const httpResponse = await httpPostClient.post({ url, body: params })

            // console.log(httpResponse)
        }
    }
}



