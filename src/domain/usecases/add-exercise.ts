export type ExerciseParams = {
    image: string
    title: string
    description?: string
    sheet_id: string
    video: string
}

export interface AddExercise {
    add:(params: ExerciseParams) => void
}
