import { AddSheet, Params as AddSheetParams } from "../../../domain/usecases";
import {
    HttpPostClient,
  } from '../../protocols/http'

type Props = {
    url: string;
    httpClient: HttpPostClient
}

export function remoteAddSheet({ url, httpClient }: Props):  AddSheet {
    return {
        async add(params: AddSheetParams) {
            await httpClient.post({ url, body: params })
        }
    }
}



