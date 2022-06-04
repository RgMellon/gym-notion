import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { makeAddSheet } from "../main/factories/pages/add-sheet/add-sheet-factory";
import { makeExercise } from "../main/factories/pages/exercises/exercises-factory";



const Stack = createNativeStackNavigator();



const AppRoutes = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={{
                headerShown: false
            }}>
                {makeAddSheet}
            </Stack.Screen>

            <Stack.Screen name="Exercises" key="Exercises" options={{title: "Meus exercícios"}}>
                {makeExercise}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default AppRoutes

