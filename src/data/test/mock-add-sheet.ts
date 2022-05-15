import faker from 'faker'
// import { AddAccount } from 'domain/usecases'

export const mockAddAccountParams = () => {

  return {
   title: faker.random.words(),
   image: faker.internet.url()
  }
}
