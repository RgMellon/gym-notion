import faker from 'faker';
import { AddSheet } from '../../../domain/usecases';
import { HttpGetClient } from '../../protocols/http';

import { remoteLoadSheet } from '.';
import {  LoadSheet, Model } from '../../../domain/usecases/load-sheet';
import { httpGetClientSpy, httpGettClientSpyURl } from '../../test';
import { mockRemoteSheetListModel } from '../../../domain/tests/mock-sheet-list';

type SutTypes = {
    sut: LoadSheet,
    httpClient: HttpGetClient<Model[]>
}
  
  const makeSut = (url: string = faker.internet.url(), body?: Model[] ): SutTypes => {
    const httpGetClient = httpGetClientSpy<Model[]>(body);
    const sut = remoteLoadSheet({url, httpClient: httpGetClient})
  
    return {
        sut,
        httpClient: httpGetClient
    }
  }


describe('RemoteLoadSurveyList', () => {
  it('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut } = makeSut(url)
    await sut.load()
    expect(httpGettClientSpyURl).toBe(url)
  })
  
  it('should return a list of Sheet if HttpGetClient returns 200', async () => {
    const url = faker.internet.url()
    const httpResult = mockRemoteSheetListModel()
    const { sut } = makeSut(url, httpResult)
    
    const sheetList = await sut.load()

    expect(sheetList).toEqual([{
      id:httpResult[0].id, 
      image: httpResult[0].image,
      title: httpResult[0].title
    },
    {
      id:httpResult[1].id, 
      image: httpResult[1].image,
      title: httpResult[1].title
    },
    {
      id:httpResult[2].id, 
      image: httpResult[2].image,
      title: httpResult[2].title
    }])
  })
  

    
})

