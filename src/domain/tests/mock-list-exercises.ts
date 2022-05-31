import { ExerciseModel } from "../usecases/load-exercises";
import faker from "faker";

export const mockExercise = (): ExerciseModel => ({
  image: faker.internet.url(),
  title: faker.random.words(10),
  sheet_id: faker.random.uuid(),
  video: faker.internet.url(),
  description: faker.random.words()
});

export const mockRemoteExerciseListModel = (): ExerciseModel[] => [
  mockExercise(),
  mockExercise(),
  mockExercise(),
];
