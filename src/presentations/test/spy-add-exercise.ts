import { mockAddExercise } from "../../domain/tests/mock-add-exercise";
import {AddExercise,ExerciseParams} from "../../domain/usecases";

export let data = {
    callsCount: 0,
    params: mockAddExercise()
}


export function addExerciseSpy(): AddExercise  {
   return {
      async add(params: ExerciseParams) {
            data.callsCount ++
            data.params = params
            return Promise.resolve()
      }
    }
}