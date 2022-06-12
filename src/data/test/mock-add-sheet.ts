import faker from 'faker'
export const mockAddAccountParams = () => {
  return {
   title: faker.random.words(),
   image: faker.internet.url()
  }
}
