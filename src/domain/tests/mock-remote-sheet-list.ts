import { Model } from "../../domain/usecases/load-sheet";
import faker from "faker";

export const mockRemoteSheetModel = (): Model => ({
  image: faker.internet.url(),
  title: faker.random.words(10),
});

export const mockRemoteSheetListModel = (): Model[] => [
  mockRemoteSheetModel(),
  mockRemoteSheetModel(),
  mockRemoteSheetModel(),
];
