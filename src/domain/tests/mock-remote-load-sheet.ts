import { LoadSheet, Model } from "../usecases";
import { mockRemoteSheetListModel } from './mock-sheet-list'

export let callsCount = 0;

export function loadSheetSpy(): LoadSheet {
    return {
      async load(): Promise<Model[]> {
            callsCount ++
            return Promise.resolve(mockRemoteSheetListModel())
      }
    }
}