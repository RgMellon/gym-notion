import { Exercise } from "../../../../presentations/page/exercise";
import { makeRemoteAddExercise } from "../../usecases/add-exercise";
import { makeRemoteListExercises } from "../../usecases/list-exercises";



export function makeExercise() {
    return <Exercise loadExercises={makeRemoteListExercises()} addExercise={makeRemoteAddExercise()}/>
}