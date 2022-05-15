import faker from 'faker';

import { Params } from '../usecases/add-sheet'

export const mockAddSheet = (): Params => {
    return {
        title: faker.random.words(),
        image: faker.internet.url(),
    }
}