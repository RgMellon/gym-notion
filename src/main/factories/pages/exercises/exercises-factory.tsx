import { Exercise } from "../../../../presentations/page/exercise";
// import { makeRemoteAddSheet } from "../../usecases/add-sheet";
import { makeRemoteListExercises } from "../../usecases/list-exercises";



export function makeExercise() {
    return <Exercise loadExercises={makeRemoteListExercises()}/>
}