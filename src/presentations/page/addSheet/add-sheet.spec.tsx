import { fireEvent, render, RenderAPI, waitFor } from "../../../utils/test.utils";
import { AddSheetPage } from ".";
import { loadSheetSpy, callsCount as loadSheetCallsCount } from '../../../domain/tests/mock-remote-load-sheet'
import { addSheetSpy } from "../../test/mock-add-sheet";
import { AddSheet, LoadSheet } from "../../../domain/usecases";


jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

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

  it("should show the modal if button was clicked", async () => {
    const {sut} = makeSut()
    const button = sut.getByTestId('button')
    await waitFor(() => button)
    
    fireEvent.press(button)

    const modal = sut.getByTestId('modal-sheet')

    expect(modal).toBeTruthy()
  })

  it("should hidde the modal when clicked outside", async () => {
    const {sut} = makeSut()

    const button = sut.getByTestId('button')
    await waitFor(() => button)
    fireEvent.press(button)

    const closeModalButton = sut.getByTestId('close-modal-sheet')
    fireEvent.press(closeModalButton)


    const modal = await sut.queryByTestId('modal-sheet')
    
    expect(modal).toBeFalsy()
  })

});
