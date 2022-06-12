import { Model } from "../usecases/load-sheet";
import faker, { fake } from "faker";

export const mockRemoteSheetModel = (): Model => ({
  image: faker.internet.url(),
  title: faker.random.words(10),
  id: faker.random.words(10)
});

export const mockRemoteSheetListModel = (): Model[] => [
  mockRemoteSheetModel(),
  mockRemoteSheetModel(),
  mockRemoteSheetModel(),
];
