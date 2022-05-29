import { mockAddAccountParams } from "../../data/test";
import { AddSheet, Params } from "../../domain/usecases";

export let data = {
    callsCount: 0,
    params: mockAddAccountParams()
}


export function addSheetSpy(): AddSheet {
    return {
      async add(params: Params) {
            data.callsCount ++
            data.params = params
            return Promise.resolve()
      }
    }
}