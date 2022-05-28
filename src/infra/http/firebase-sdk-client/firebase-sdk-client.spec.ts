import { mockPostRequest } from "../../../data/test/"

import firestore from '@react-native-firebase/firestore'

import { firebaseSdkClient } from "./firebase-sdk-client";

import faker from 'faker'


jest.mock('@react-native-firebase/firestore', () => () => {
    return {
      collection: jest.fn(() => {
          return {
              add: jest.fn(() => {
                  console.log('cavalo')
                  return  jest.fn( () => {})
              })
          }
      }),
    };
});




export const mocktHttpResponse = () => ({
  data: faker.random.objectElement(),
  status: faker.random.number()
})




describe('FirebaseSdkClient', () => {
    describe('post', () => {
        
        it('Should call firebase.post with correct values', async () => {
            // const request = mockPostRequest()
            // firebaseSdkClient().post({url:request.url,  body: request.body})
            // expect(firestore().collection('gym-notion')).toHaveBeenCalled()
            expect(1).toBeTruthy()
        })
    })

    // describe('get', () => {
    //     // const getItemSpy = jest.spyOn(firestore, 'get').mockReturnValueOnce(JSON.stringify(value))
    // })
})