import faker from 'faker';

import { ExerciseParams } from '../usecases/add-exercise'

export const mockAddExercise = (): ExerciseParams => {
    return {
        title: faker.random.words(),
        image: faker.internet.url(),
        sheet_id: faker.internet.url(),
        video: faker.internet.url(),
        description: faker.random.words(20)
    }
}