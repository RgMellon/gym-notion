import { render, RenderAPI, waitFor } from "../../../utils/test.utils";
import { AddSheetPage } from ".";
import { loadSheetSpy, callsCount as loadSheetCallsCount } from '../../../domain/tests/mock-remote-load-sheet'
import { addSheetSpy } from "../../test/mock-add-sheet";
import { AddSheet, LoadSheet } from "../../../domain/usecases";


type SutTypes = {
  loadSheetSpy: LoadSheet
  addSheetSpy: AddSheet
  sut: RenderAPI
}

const makeSut = (): SutTypes => {
  const loadSheet = loadSheetSpy()
  const addSheet = addSheetSpy()

  const sut = render(<AddSheetPage loadSheet={loadSheet} addSheet={addSheet} />)

  return {
    loadSheetSpy: loadSheet,
    addSheetSpy: addSheet,
    sut
  }
}

describe("AddSheetPage", () => {

  it('Should call LoadSheet', async () => {
    const { sut } = makeSut()
    expect(loadSheetCallsCount).toBe(1)
    await waitFor(() => sut.getByTestId('button'))
  })

  it("should render an add button", async () => {
    const {sut} = makeSut()
    const button = sut.getByTestId('button')
    expect(button).toBeTruthy()
    await waitFor(() => button)
  });

  // it("should render an add button", async () => {
  //   const {sut} = makeSut()
  //   const button = sut.getByTestId('button')
  //   expect(button).toBeTruthy()
  //   await waitFor(() => button)
  // });
});
