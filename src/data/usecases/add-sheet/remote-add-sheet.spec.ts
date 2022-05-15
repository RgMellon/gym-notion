import faker from 'faker';
import { mockAddSheet } from '../../../domain/tests/mock-add-sheet';
import { AddSheet } from '../../../domain/usecases';
import { HttpPostClient } from '../../protocols/http';
import {  httpPostClientSpy, httpPostClientSpybody, httpPostClientSpyURl } from '../../test/mock-http';
import { remoteAddSheet } from './remote-add-sheet';

type SutTypes = {
    sut: AddSheet,
    httpPostClient: HttpPostClient
}
  
  const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpPostClient = httpPostClientSpy();
    const sut = remoteAddSheet({url, httpPostClient})
  
    return {
        sut,
        httpPostClient
    }
  }

describe('RemoteAddSheet', () => {
    it('should call HttpPostClient with correct URL', async () => {
      const url = faker.internet.url()
      const { sut } = makeSut(url)
      sut.add(mockAddSheet())
  
      expect(httpPostClientSpyURl).toBe(url)
    })

    it('should call HttpPostClient with correct Body', async () => {
      const url = faker.internet.url()
      const body = mockAddSheet()
      const { sut } = makeSut(url)
      sut.add(body)
  
      expect(httpPostClientSpybody).toBe(body)
    })
})