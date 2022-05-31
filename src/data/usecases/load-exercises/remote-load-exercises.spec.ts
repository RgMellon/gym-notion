import faker from 'faker';
import { HttpGetClient } from '../../protocols/http';
import { remoteLoadExercise } from '.';
import {  ExerciseModel, LoadExercises } from '../../../domain/usecases/load-exercises';
import { httpGetClientSpy, httpGettClientSpyURl } from '../../test';
import { mockRemoteExerciseListModel } from '../../../domain/tests/mock-list-exercises';

type SutTypes = {
    sut: LoadExercises,
    httpClient: HttpGetClient<ExerciseModel[]>
}
  
  const makeSut = (url: string = faker.internet.url(), body?: ExerciseModel[] ): SutTypes => {
    const httpGetClient = httpGetClientSpy<ExerciseModel[]>(body);
    const sut = remoteLoadExercise({url, httpClient: httpGetClient})
  
    return {
        sut,
        httpClient: httpGetClient
    }
  }


describe('RemoteLoadExercises', () => {
  it('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut } = makeSut(url)
    await sut.load()
    expect(httpGettClientSpyURl).toBe(url)
  })
  
  it('should return a list of Sheet if HttpGetClient returns 200', async () => {
    const url = faker.internet.url()
    const httpResult = mockRemoteExerciseListModel()
    const { sut } = makeSut(url, httpResult)
    
    const sheetList = await sut.load()

    expect(sheetList).toEqual([{
      image: httpResult[0].image,
      title: httpResult[0].title,
      sheet_id: httpResult[0].sheet_id,
      video: httpResult[0].video,
      description: httpResult[0].description
    },
    {
      image: httpResult[1].image,
      title: httpResult[1].title,
      sheet_id: httpResult[1].sheet_id,
      video: httpResult[1].video,
      description: httpResult[1].description
    },
    {
      image: httpResult[2].image,
      title: httpResult[2].title,
      sheet_id: httpResult[2].sheet_id,
      video: httpResult[2].video,
      description: httpResult[2].description
    }])
  })
})


