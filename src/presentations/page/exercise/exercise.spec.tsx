import { fireEvent, render, RenderAPI, waitFor } from "../../../utils/test.utils";
import { Exercise } from ".";
import {loadExerciseSpy,  callsCount as loadExerciseCallsCount } from '../../../domain/tests/mock-remote-add-exercise'
import { LoadExercises, AddExercise} from "../../../domain/usecases";
import { addExerciseSpy } from "../../test/spy-add-exercise";
import { mockRemoteExerciseListModel } from "../../../domain/tests/mock-list-exercises";



jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({ goBack: jest.fn() }),
    useRoute: () => ({
      params: {
        "sheetId": "1234",
      }
    }),
  }));


type SutTypes = {
  loadExercises: LoadExercises
  addExercise: AddExercise
  sut: RenderAPI
}

loadExerciseSpy
const makeSut = (responseMock = mockRemoteExerciseListModel()): SutTypes => {
  const loadExercises = loadExerciseSpy(responseMock)
  const addExercise = addExerciseSpy()

  const sut = render(<Exercise loadExercises={loadExercises} addExercise={addExercise} />)

  return {
    loadExercises,
    addExercise,
    sut
  }
}

describe("Exercise", () => {
 it('Should call LoadExercise', async () => {
    const { sut } = makeSut()
    expect(loadExerciseCallsCount).toBe(1)
    await waitFor(() => sut.getByTestId('button'))
  })

  it("Should render the empty page if the value was empty", async () => {
    const { sut } = makeSut([])
    await waitFor(() => sut.getByTestId('button'))
    const emptyPage = sut.getByTestId('empty')
    expect(emptyPage).toBeTruthy()
  })

  it("Should render the cards if the api return sucess", async () => {
    const { sut } = makeSut()
    await waitFor(() => sut.getByTestId('button'))
    const numberOfCardOnScreen = sut.getAllByTestId('title')
    expect(numberOfCardOnScreen).toHaveLength(mockRemoteExerciseListModel().length)
  })

  it("Should hidde load after mount page", async () => {
    const { sut } = makeSut()
    await waitFor(() => sut.getByTestId('button'))
    const load = sut.queryByTestId('load')
    expect(load).toBeFalsy()
  })

  it("Should render the button to add new exercise", async () => {
    const { sut } = makeSut()
    await waitFor(() => sut.getByTestId('button'))
    
    const addButton = sut.getByTestId('button')
    expect(addButton).toBeTruthy()
  })

  it("Should open a modal to add new Exercise when clicked on AddButton", async () => {
    const { sut } = makeSut()
    await waitFor(() => sut.getByTestId('button'))

    const addButton = sut.getByTestId('button')
    fireEvent.press(addButton)
    
    const add_exercise_modal = sut.getByTestId('modal-sheet')
    expect(add_exercise_modal).toBeTruthy()
  })
});
