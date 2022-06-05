import { useRoute } from "@react-navigation/native";
import { Exercise } from "../../../../presentations/page/exercise";
import { makeRemoteAddExercise } from "../../usecases/add-exercise";
import { makeRemoteListExercises } from "../../usecases/list-exercises";


type RouteParams = {
    sheetId: string
  }

  
export function makeExercise() {
    const { params } = useRoute()
    const routeParams = params as RouteParams;
    
    return <Exercise loadExercises={makeRemoteListExercises(routeParams.sheetId)} addExercise={makeRemoteAddExercise()}/>
}