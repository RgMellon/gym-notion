import { LoadExercises, ExerciseModel } from "../usecases/load-exercises";
import {  mockRemoteExerciseListModel } from "./mock-list-exercises";


export let callsCount = 0;

export function loadExerciseSpy(responseMock: ExerciseModel[]): LoadExercises {
    return {
      async load(): Promise<ExerciseModel[]> {
            callsCount ++
            return Promise.resolve(responseMock)
      }
    }
}